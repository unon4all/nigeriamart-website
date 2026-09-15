import { spawnSync } from 'node:child_process';

try {
  const vite = await import('vite');
  await vite.build();
} catch (error) {
  const missingVite = error?.code === 'ERR_MODULE_NOT_FOUND' && String(error?.message || '').includes("package 'vite'");
  if (!missingVite) throw error;
  console.warn('Vite is not installed in this offline runtime; running the deterministic verification build instead.');
  const result = spawnSync(process.execPath, ['scripts/build-offline.cjs'], { stdio: 'inherit' });
  process.exitCode = result.status ?? 1;
}
