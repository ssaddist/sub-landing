import { REPO_URL } from './i18n/strings.js';

export const APP_VERSION = '0.2.0';

const base = `${REPO_URL}/releases/latest/download`;
const v = APP_VERSION;

export const PLATFORMS = ['mac', 'windows', 'linux'];

export const DOWNLOADS = {
  mac: [{ label: '.dmg', file: `Tally_${v}_universal.dmg` }],
  windows: [
    { label: '.exe', file: `Tally_${v}_x64-setup.exe` },
    { label: '.msi', file: `Tally_${v}_x64_en-US.msi` },
  ],
  linux: [
    { label: '.AppImage', file: `Tally_${v}_amd64.AppImage` },
    { label: '.deb', file: `Tally_${v}_amd64.deb` },
    { label: '.rpm', file: `Tally-${v}-1.x86_64.rpm` },
  ],
};

export const downloadUrl = (file) => `${base}/${file}`;
