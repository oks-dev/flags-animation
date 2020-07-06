import React from 'react';

const flags = [
  {
    id: 1,
    position: { x: 1362.5, y: 7.5 },
    size: 0.5,
    value: 'https://assets.vercel.com/image/upload/q_auto/front/flags/flags-png/se.png',
    alt: 'se',
    delay: -115322
  },
  {
    id: 2,
    position: { x: 1362.5, y: 334.5 },
    size: 0.5,
    value: 'https://assets.vercel.com/image/upload/q_auto/front/flags/flags-png/us.png',
    alt: 'us',
    delay: -179085
  },
  {
    id: 3,
    position: { x: 1362.5, y: 41.5 },
    size: 0.5,
    value: 'https://assets.vercel.com/image/upload/q_auto/front/flags/flags-png/br.png',
    alt: 'br',
    delay: -254136
  },
  {
    id: 4,
    position: { x: 1362.5, y: 296.5 },
    size: 0.5,
    value: 'https://assets.vercel.com/image/upload/q_auto/front/flags/flags-png/kr.png',
    alt: 'kr',
    delay: -274983
  },
  {
    id: 5,
    position: { x: 1362.5, y: 318.5 },
    size: 0.5,
    value: 'https://assets.vercel.com/image/upload/q_auto/front/flags/flags-png/hk.png',
    alt: 'hk',
    delay: -230949
  },
  {
    id: 6,
    position: { x: 1362.5, y: 188.5 },
    size: 0.5,
    value: 'https://assets.vercel.com/image/upload/q_auto/front/flags/flags-png/au.png',
    alt: 'au',
    delay: -80847
  },
  {
    id: 7,
    position: { x: 1355, y: 320 },
    size: 0.6,
    value: 'https://assets.vercel.com/image/upload/q_auto/front/flags/flags-png/se.png',
    alt: 'se',
    delay: -123051
  },
  {
    id: 8,
    position: { x: 1355, y: 148 },
    size: 0.6,
    value: 'https://assets.vercel.com/image/upload/q_auto/front/flags/flags-png/fr.png',
    alt: 'fr',
    delay: -45153
  },
  {
    id: 9,
    position: { x: 1355, y: 342 },
    size: 0.6,
    value: 'https://assets.vercel.com/image/upload/q_auto/front/flags/flags-png/uk.png',
    alt: 'uk',
    delay: -258814
  },
  {
    id: 10,
    position: { x: 1355, y: 148 },
    size: 0.6,
    value: 'https://assets.vercel.com/image/upload/q_auto/front/flags/flags-png/ca.png',
    alt: 'ca',
    delay: -132508
  },
  {
    id: 11,
    position: { x: 1355, y: 43 },
    size: 0.6,
    value: 'https://assets.vercel.com/image/upload/q_auto/front/flags/flags-png/jp.png',
    alt: 'jp',
    delay: -92237
  },
  {
    id: 12,
    position: { x: 1355, y: 275 },
    size: 0.6,
    value: 'https://assets.vercel.com/image/upload/q_auto/front/flags/flags-png/in.png',
    alt: 'in',
    delay: -64373
  },
  {
    id: 13,
    position: { x: 1340, y: 0 },
    size: 0.8,
    value: 'https://assets.vercel.com/image/upload/q_auto/front/flags/flags-png/sg.png',
    alt: 'sg',
    delay: -32847
  },
  {
    id: 14,
    position: { x: 1340, y: 282 },
    size: 0.8,
    value: 'https://assets.vercel.com/image/upload/q_auto/front/flags/flags-png/au.png',
    alt: 'au',
    delay: -146441
  },
  {
    id: 15,
    position: { x: 1340, y: 233 },
    size: 0.8,
    value: 'https://assets.vercel.com/image/upload/q_auto/front/flags/flags-png/fr.png',
    alt: 'fr',
    delay: -196169
  },
  {
    id: 16,
    position: { x: 1340, y: 138 },
    size: 0.8,
    value: 'https://assets.vercel.com/image/upload/q_auto/front/flags/flags-png/uk.png',
    alt: 'uk',
    delay: -217119
  },
  {
    id: 17,
    position: { x: 1340, y: 22 },
    size: 0.8,
    value: 'https://assets.vercel.com/image/upload/q_auto/front/flags/flags-png/ie.png',
    alt: 'ie',
    delay: -231458
  },
  {
    id: 18,
    position: { x: 1340, y: 122 },
    size: 0.8,
    value: 'https://assets.vercel.com/image/upload/q_auto/front/flags/flags-png/jp.png',
    alt: 'jp',
    delay: -269898
  },
  {
    id: 19,
    position: { x: 1340, y: 0 },
    size: 0.8,
    value: 'https://assets.vercel.com/image/upload/q_auto/front/flags/flags-png/au.png',
    alt: 'au',
    delay: -283017
  },
  {
    id: 20,
    position: { x: 1340, y: 58 },
    size: 0.8,
    value: 'https://assets.vercel.com/image/upload/q_auto/front/flags/flags-png/in.png',
    alt: 'in',
    delay: -154475
  },
  {
    id: 21,
    position: { x: 1340, y: 173 },
    size: 0.8,
    value: 'https://assets.vercel.com/image/upload/q_auto/front/flags/flags-png/sg.png',
    alt: 'sg',
    delay: -108915
  },
  {
    id: 22,
    position: { x: 1340, y: 88 },
    size: 0.8,
    value: 'https://assets.vercel.com/image/upload/q_auto/front/flags/flags-png/au.png',
    alt: 'au',
    delay: -180305
  },
  {
    id: 23,
    position: { x: 1340, y: 325 },
    size: 0.8,
    value: 'https://assets.vercel.com/image/upload/q_auto/front/flags/flags-png/hk.png',
    alt: 'hk',
    delay: -91627
  },
  {
    id: 24,
    position: { x: 1340, y: 51 },
    size: 0.8,
    value: 'https://assets.vercel.com/image/upload/q_auto/front/flags/flags-png/in.png',
    alt: 'in',
    delay: -63458
  },
  {
    id: 25,
    position: { x: 1340, y: 43 },
    size: 0.8,
    value: 'https://assets.vercel.com/image/upload/q_auto/front/flags/flags-png/au.png',
    alt: 'au',
    delay: -7627
  },
  {
    id: 26,
    position: { x: 1340, y: 307 },
    size: 0.8,
    value: 'https://assets.vercel.com/image/upload/q_auto/front/flags/flags-png/jp.png',
    alt: 'jp',
    delay: -42000
  },
  {
    id: 27,
    position: { x: 1340, y: 211 },
    size: 0.8,
    value: 'https://assets.vercel.com/image/upload/q_auto/front/flags/flags-png/us.png',
    alt: 'jp',
    delay: -294407
  },
  {
    id: 28,
    position: { x: 1340, y: 15 },
    size: 0.8,
    value: 'https://assets.vercel.com/image/upload/q_auto/front/flags/flags-png/br.png',
    alt: 'br',
    delay: -202373
  },
]

function App() {
  return (
    <div className='container-fluid pt-4 content-wrap'>
      <div className='row home-flags'>
        <div className='flags-container'>
          <div className='flags-bg'>
            <div className='slider-wrapper'>
              {flags.map(flag => {
                return (
                  <img
                    key={flag.id}
                    className='img'
                    src={flag.value}
                    style={
                      {
                        top: flag.position.y,
                        left: flag.position.x,
                        width: flag.size * 150,
                        height: flag.size * 150,
                        animationDelay: `${flag.delay}ms`
                      }
                    }
                    alt={flag.alt}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
