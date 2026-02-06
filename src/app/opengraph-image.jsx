import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Pedro Ferreira - Full Stack Web Developer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: 'linear-gradient(to bottom right, #0f172a, #1e293b)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 'bold',
            marginBottom: 20,
            background: 'linear-gradient(to right, #f97316, #eab308)',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          Pedro Ferreira
        </div>
        <div style={{ fontSize: 36, color: '#94a3b8', marginBottom: 40 }}>
          Full Stack Web Developer
        </div>
        <div
          style={{
            display: 'flex',
            gap: 20,
            fontSize: 20,
            color: '#64748b',
          }}
        >
          <span>React</span>
          <span>|</span>
          <span>Next.js</span>
          <span>|</span>
          <span>TypeScript</span>
          <span>|</span>
          <span>Node.js</span>
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            fontSize: 18,
            color: '#475569',
          }}
        >
          globalwebsystems.dev
        </div>
      </div>
    ),
    { ...size }
  );
}
