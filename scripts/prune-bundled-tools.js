const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const arduinoDir = path.join(rootDir, 'tools', 'Arduino');

const removePath = target => {
    if (fs.existsSync(target)) {
        fs.rmSync(target, {recursive: true, force: true});
        console.log(`[prune-bundled-tools] Removed ${target}`);
    }
};

if (!fs.existsSync(arduinoDir)) {
    console.log('[prune-bundled-tools] Arduino tools directory not found, skipping prune.');
    process.exit(0);
}

[
    path.join(arduinoDir, 'packages', 'rp2040'),
    path.join(arduinoDir, 'packages', 'esp8266'),
    path.join(arduinoDir, 'package_rp2040_index.json'),
    path.join(arduinoDir, 'package_esp8266com_index.json')
].forEach(removePath);
