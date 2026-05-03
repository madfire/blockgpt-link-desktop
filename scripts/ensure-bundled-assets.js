const fs = require('fs');
const path = require('path');
const {spawnSync} = require('child_process');

const rootDir = path.resolve(__dirname, '..');

const requiredDirs = [
    {name: 'drivers', fetchScript: 'fetch:drivers'},
    {name: 'external-resources', fetchScript: 'fetch:exts'},
    {name: 'firmwares', fetchScript: 'fetch:firmwares'},
    {name: 'tools', fetchScript: 'fetch:tools'}
];

const hasContent = dirPath => fs.existsSync(dirPath) && fs.readdirSync(dirPath).length > 0;

const runScript = scriptName => {
    const result = spawnSync('npm', ['run', scriptName], {
        cwd: rootDir,
        stdio: 'inherit',
        shell: process.platform === 'win32'
    });

    if (result.status !== 0) {
        process.exit(result.status || 1);
    }
};

const missingDirs = requiredDirs.filter(item => !hasContent(path.join(rootDir, item.name)));

if (missingDirs.length === 0) {
    console.log('[ensure-bundled-assets] Reusing existing bundled assets.');
    process.exit(0);
}

console.log('[ensure-bundled-assets] Missing bundled assets:', missingDirs.map(item => item.name).join(', '));
for (const item of missingDirs) {
    runScript(item.fetchScript);
}
