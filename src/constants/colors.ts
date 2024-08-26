'use client';

import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config';

export const tailwindTheme = resolveConfig(tailwindConfig);
const colors = tailwindConfig.theme!.extend!.colors;

export const mnGreen0 = colors['mn-green-0'];
export const mnGreen1 = colors['mn-green-1'];
export const mnGreen2 = colors['mn-green-2'];
export const mnGreen3 = colors['mn-green-3'];
export const mnGreen4 = colors['mn-green-4'];
export const mnBlue0 = colors['mn-blue-0'];
export const mnBlue1 = colors['mn-blue-1'];
export const mnBlue2 = colors['mn-blue-2'];
export const mnBlue3 = colors['mn-blue-3'];
export const mnBlue4 = colors['mn-blue-4'];
export const mnDarkGray = colors['mn-dark-gray'];
export const mnGray = colors['mn-gray'];
export const mnLightGray = colors['mn-light-gray'];
