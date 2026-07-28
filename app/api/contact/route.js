import { saveContactMessage } from '@/lib/firebase-admin';

const contactSchema = {
  name: { required: true, minLength: 2, maxLength: 100 },
  email: { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
  message: { required: true, minLength: 10, maxLength: 5000 },
};

function validateData(data) {
  for (const [field, rules] of Object.entries(contactSchema)) {
    const value = data[field];

    if (rules.required && !value) {
      return { valid: false, error: `${field} is required` };
    }

    if (rules.minLength && value.length < rules.minLength) {
      return { valid: false, error: `${field} must be at least ${rules.minLength} characters` };
    }

    if (rules.maxLength && value.length > rules.maxLength) {
      return { valid: false, error: `${field} must be no more than ${rules.maxLength} characters` };
    }

    if (rules.pattern && !rules.pattern.test(value)) {
      return { valid: false, error: `${field} format is invalid` };
    }
  }

  return { valid: true };
}

export async function POST(request) {
  // Only accept POST
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const body = await request.json();

    // Validate
    const validation = validateData(body);
    if (!validation.valid) {
      return new Response(JSON.stringify({ error: validation.error }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Rate limiting check (basic)
    const clientIp = request.headers.get('x-forwarded-for') || request.headers.get('x-client-ip') || 'unknown';
    // In production, implement proper rate limiting with Redis or similar

    // Save to Firestore
    await saveContactMessage(body.name, body.email, body.message);

    return new Response(
      JSON.stringify({ success: true, message: 'Message received' }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Contact API error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
