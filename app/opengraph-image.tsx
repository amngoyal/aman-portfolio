import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Aman Goyal | Senior JavaScript Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0a0a0a',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          position: 'relative'
        }}
      >
        <div style={{
          position: 'absolute',
          top: -100,
          left: -100,
          width: 600,
          height: 600,
          background: 'rgba(6, 182, 212, 0.15)',
          filter: 'blur(100px)',
          borderRadius: '50%'
        }} />
        <div style={{
          position: 'absolute',
          bottom: -100,
          right: -100,
          width: 700,
          height: 700,
          background: 'rgba(168, 85, 247, 0.15)',
          filter: 'blur(120px)',
          borderRadius: '50%'
        }} />

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ fontSize: 130, fontWeight: 900, letterSpacing: '-0.05em', color: '#ffffff' }}>
            AMAN GOYAL
          </div>
        </div>
        <div style={{ fontSize: 44, color: '#a1a1aa', marginTop: 10 }}>
          Senior JavaScript Engineer
        </div>
        <div style={{ display: 'flex', gap: 24, marginTop: 70 }}>
          <div style={{ fontSize: 28, padding: '12px 32px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 40 }}>React</div>
          <div style={{ fontSize: 28, padding: '12px 32px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 40 }}>Next.js</div>
          <div style={{ fontSize: 28, padding: '12px 32px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 40 }}>Architecture</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
