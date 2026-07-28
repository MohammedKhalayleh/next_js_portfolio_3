const skills = (icon, names) =>
  names.map((name) => ({
    id: name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
    name,
    icon,
  }));

export const SKILL_TABS = [
  {
    id: 'hardware',
    label: 'Hardware',
    skills: [
      ...skills('code', ['HDL', 'VHDL', 'SystemVerilog']),
      ...skills('cpu', ['FPGA Design', 'RTL Design', 'Digital Logic',]),
      ...skills('testing', ['Simulation', 'Testbenches']),
      ...skills('tool', ['Quartus Prime', 'Vivado', 'ModelSim']),
    ],
  },
  {
    id: 'software',
    label: 'Software',
    skills: [
      ...skills('code', ['C', 'Java', 'JavaScript', 'HTML', 'CSS']),
      ...skills('web', ['React.js', 'Next.js', 'Node.js', 'Express.js',]),
      ...skills('database', ['MongoDB', 'SQL', ]),
      ...skills('flame', ['Firebase']),
      ...skills('web', ['REST APIs']),
    ],
  },
  {
    id: 'systems-networking',
    label: 'Systems & Networking',
    skills: [
      ...skills('terminal', ['Linux']),
      ...skills('server', ['Windows Server', 'Active Directory', 'VMware ESXi']),
      ...skills('git', ['Git', 'GitHub']),
      ...skills('network', ['Computer Networking', 'Subnetting', 'Network Troubleshooting']),
      ...skills('router', ['VLANs', 'Switches', 'Routers', 'Static Routing', 'Dynamic Routing', 'DHCP', 'DNS']),
      ...skills('security', ['ACLs', 'FortiGate']),
    ],
  },
];
