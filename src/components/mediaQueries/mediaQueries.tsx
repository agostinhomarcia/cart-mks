import { css } from 'styled-components';
import { breakpoints } from './breakpoints';
import { MediaQueries } from './mediaQueries.interface';

export function createMediaQueries(): MediaQueries {
  return Object.keys(breakpoints.medias).reduce(
    (acc: MediaQueries, label: string) => {
      acc[label] = (...args: any[]) => {
        return css`
          @media (max-width: ${breakpoints.medias[label] / 16}rem) {
            ${css(...(args as [TemplateStringsArray, ...any[]]))}
          }
        `;
      };
      return acc;
    },
    {} as MediaQueries
  );
}

const Media: MediaQueries = createMediaQueries();

export default Media;
