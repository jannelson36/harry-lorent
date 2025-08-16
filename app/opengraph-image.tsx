import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Harry Rajula Lorent - Portfolio';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
        }}
      >
        <div style={{ fontSize: 80, fontWeight: 800 }}>Harry Rajula Lorent</div>
      </div>
    ),
    { ...size }
  );
}