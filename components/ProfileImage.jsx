'use client';

import Image from 'next/image';
import { generateMKMonogram } from '@/lib/constants';

export default function ProfileImage({ src, alt, size = 'lg', className = '' }) {
  const sizeMap = {
    sm: 'w-12 h-12',
    md: 'w-20 h-20',
    lg: 'w-40 h-40',
    full: 'w-full h-full',
  };

  const monogram = generateMKMonogram();

  if (!src) {
    return (
      <div className={`${sizeMap[size] ?? sizeMap.lg} ${className} bg-gradient-to-br from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark rounded-lg flex items-center justify-center text-white font-bold text-lg`}>
        {monogram}
      </div>
    );
  }

  return (
    <div className={`${sizeMap[size] ?? sizeMap.lg} ${className} relative rounded-lg overflow-hidden border-2 border-primary-light dark:border-primary-dark`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}
