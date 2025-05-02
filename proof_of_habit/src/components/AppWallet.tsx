'use client';

import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';

const AppWallet = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const style =
    resolvedTheme === 'dark'
      ? {
          background: 'linear-gradient(90deg, #9945FF 0%, #14F195 100%)',
          color: 'white',
          border: 'none',
          borderRadius: '0.5rem',
          fontWeight: '550',
        }
      : {
          background: 'linear-gradient(90deg, #14F195 0%, #9945FF 100%)',
          color: 'black',
          border: 'none',
          borderRadius: '0.5rem',
          fontWeight: '550',
        };

  return (
    <div>
      <WalletMultiButton style={style} />
    </div>
  );
};

export default AppWallet;
