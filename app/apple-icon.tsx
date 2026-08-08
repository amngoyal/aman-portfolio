import { ImageResponse } from 'next/og';


export const size = {
  width: 180,
  height: 180,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 100,
          background: '#151515',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 900,
          fontFamily: 'system-ui, -apple-system, sans-serif',
          letterSpacing: '-0.05em',
        }}
      >
        AG.
      </div>
    ),
    { ...size }
  );
}
