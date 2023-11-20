import { css } from 'styled-components';

export interface Breakpoints {
  [key: string]: number;
}

type MediaQueryFunc = (...args: any[]) => ReturnType<typeof css>;

export interface MediaQueries {
  [key: string]: MediaQueryFunc;
}
