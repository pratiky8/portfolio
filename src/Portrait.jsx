import React, { useState } from 'react';
import { CloudSculpture } from './CloudSculpture';
import { profile } from './data';

// The JPEG stays unmodified. Contain in the hero; top-aligned crop in About.
export function Portrait({ variant = 'hero' }) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const available = Boolean(profile.portrait) && !failed;
  return <figure className={`portrait-frame portrait-${variant} ${loaded ? 'is-loaded' : ''} ${available ? '' : 'is-fallback'}`}>
    <div className="portrait-light" aria-hidden="true"/>
    {available ? <>
      {variant === 'about' && loaded && <img className="portrait-echo" src={profile.portrait} alt="" aria-hidden="true" width="640" height="800" decoding="async"/>}
      <img className="portrait-photo" src={profile.portrait} alt={variant === 'hero' ? 'Portrait of Pratik Yadav, aspiring AWS Cloud Engineer and software developer' : 'Pratik Yadav — a closer portrait'} width="640" height="800" loading={variant === 'hero' ? 'eager' : 'lazy'} fetchPriority={variant === 'hero' ? 'high' : 'auto'} decoding="async" onLoad={() => setLoaded(true)} onError={() => { setFailed(true); setLoaded(false); }}/>
    </> : <div className="portrait-fallback" role="img" aria-label="Abstract cloud infrastructure illustration"><CloudSculpture small={variant === 'about'}/></div>}
    <div className="portrait-edge" aria-hidden="true"/>
    <figcaption><span>{available ? 'PRATIK YADAV' : 'CLOUD / CODE / CONNECTION'}</span><span>{variant === 'hero' ? 'ALWAYS LEARNING' : 'A DIFFERENT PERSPECTIVE'}</span></figcaption>
  </figure>;
}
