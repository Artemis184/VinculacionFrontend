const fs = require('fs');
const path = require('path');
require('dotenv').config();

const envPath = path.join(__dirname, '..', '.env');
const envDir = path.join(__dirname, '..', 'src', 'environments');

// Asegurarse de que el directorio existe
if (!fs.existsSync(envDir)) {
  fs.mkdirSync(envDir, { recursive: true });
}

// Función para generar el contenido del environment
function generateEnvironment(isProduction = false) {
  const apiUrl = process.env.API_URL || 'http://localhost:3000/api';
  const urlLogo = process.env.URL_LOGO || 'https://example.com/logo.png';
  const apiTimeout = process.env.API_TIMEOUT || 60000;

  return `// This file can be replaced during build by using the \`fileReplacements\` array.
// \`ng build\` replaces \`environment.ts\` with \`environment.prod.ts\`.
// The list of file replacements can be found in \`angular.json\`.

export const environment = {
  production: ${isProduction},
  apiUrl: '${apiUrl}',
  urlLogo: '${urlLogo}',
  apiTimeout: ${apiTimeout},
};
`;
}

// Generar environment.ts
fs.writeFileSync(path.join(envDir, 'environment.ts'), generateEnvironment(false));

// Generar environment.prod.ts
fs.writeFileSync(path.join(envDir, 'environment.prod.ts'), generateEnvironment(true));

console.log('Environments generated from .env');