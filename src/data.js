export const profile = {
  name: 'Pratik Yadav',
  portrait: '/images/pratik-yadav.jpeg', // Original image in public/images/. Missing files use cloud artwork.
  email: 'pratiky0822@gmail.com',
  github: 'https://github.com/pratiky8',
  linkedin: 'https://www.linkedin.com/in/pratik022/',
  phone: '+919450676821',
  phoneDisplay: '+91 94506 76821',
  resume: '', // Add /Pratik-Yadav-Resume.pdf after placing the real PDF in public/.
};
export const projects = [
  { id: 'load-balancer', category: 'Cloud', title: 'One endpoint. Multiple servers.', subtitle: 'AWS EC2 & Nginx load balancing', description: 'A planned highly available web tier that distributes incoming traffic across Nginx servers on EC2.', tags: ['EC2', 'Load Balancing', 'Nginx', 'CloudWatch'], icon: 'cloud', goals: ['Provision two EC2 instances across availability zones.', 'Configure Nginx and an Application Load Balancer with health checks.', 'Document security groups, traffic flow and failure testing.'], repo: '' },
  { id: 'vpc', category: 'Cloud', title: 'A network, built with intention.', subtitle: 'AWS VPC architecture', description: 'A network design exploring public and private subnets, routing boundaries and controlled access.', tags: ['VPC', 'Subnets', 'Route Tables', 'IAM'], icon: 'network', goals: ['Design a VPC with distinct public and private subnets.', 'Document CIDR allocation, route tables and internet gateway routing.', 'Compare security groups and network isolation choices.'], repo: '' },
  { id: 'docker-django', category: 'DevOps', title: 'From source to container.', subtitle: 'Dockerized Django application', description: 'A reproducible application environment with Django, Docker and an Nginx reverse proxy.', tags: ['Docker', 'Django', 'Linux', 'Nginx'], icon: 'box', goals: ['Write a Dockerfile and Compose development environment.', 'Configure environment variables without committing secrets.', 'Document image builds, container networking and deployment steps.'], repo: '' },
  { id: 'django', category: 'Development', title: 'A thoughtful backend foundation.', subtitle: 'Django web application', description: 'A project idea for a database-backed web application with clear APIs and structured data models.', tags: ['Python', 'Django', 'MySQL', 'REST APIs'], icon: 'code', goals: ['Define models and migrations for a useful application.', 'Build validated CRUD endpoints and database integration.', 'Add meaningful API tests and setup documentation.'], repo: '' },
  { id: 'react', category: 'Development', title: 'Interfaces that feel effortless.', subtitle: 'React application', description: 'A separate application idea focused on reusable components, accessible interactions and API integration.', tags: ['React.js', 'JavaScript', 'HTML', 'CSS'], icon: 'code', goals: ['Choose an application use case and design responsive screens.', 'Build reusable components with loading and error states.', 'Connect a REST API and verify keyboard accessibility.'], repo: '' },
];
export const skills = {
  AWS: ['EC2', 'S3', 'VPC', 'EBS', 'Lambda', 'IAM', 'Security Groups', 'Subnets', 'Route Tables', 'Internet Gateway', 'Elastic Load Balancing', 'CloudWatch fundamentals'],
  DevOps: ['Docker', 'Git', 'GitHub', 'Nginx', 'Containerization', 'Deployment fundamentals'],
  Linux: ['Linux fundamentals'],
  Networking: ['TCP/IP', 'OSI Model', 'DNS', 'DHCP', 'NAT', 'ARP', 'IPv4', 'CIDR', 'Subnetting', 'Routing', 'Ports & protocols', 'VLAN fundamentals'],
  Programming: ['Java', 'Python', 'JavaScript'],
  Backend: ['Django', 'REST APIs'],
  Frontend: ['React.js', 'HTML', 'CSS'],
  Databases: ['MySQL'],
};
