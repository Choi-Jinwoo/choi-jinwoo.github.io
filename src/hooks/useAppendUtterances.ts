import { MutableRefObject, useEffect } from 'react';

const utterancesSettings = {
  src: 'https://utteranc.es/client.js',
  repo: 'Choi-Jinwoo/choi-jinwoo.github.io',
  'issue-term': 'pathname',
  label: 'utterances',
  theme: 'github-light',
  crossorigin: 'anonymous',
  async: 'true',
};

const useAppendUtterances = (ref: MutableRefObject<HTMLElement | null>) => {
  useEffect(() => {
    if (ref.current === null) return;

    const $utterances = document.createElement('script');

    Object.entries(utterancesSettings).forEach(([key, value]) => {
      $utterances.setAttribute(key, value);
    });

    ref.current.appendChild($utterances);
  }, []);
};

export default useAppendUtterances;
