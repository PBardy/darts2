import { createActionGroup, emptyProps, props } from '@ngrx/store';
import type { Match, Round } from '@types';
import { MATCH_KEY } from './match.key';

export const { startMatch, addMatch, deleteMatch, addScore, addRound, addLeg } =
  createActionGroup({
    source: MATCH_KEY,
    events: {
      startMatch: emptyProps(),
      addMatch: props<{ match: Match }>(),
      deleteMatch: props<{ match: Match }>(),
      addScore: props<{ score: number }>(),
      addRound: props<{ match: Match; round: Round }>(),
      addLeg: props<{ match: Match; leg: Round[] }>(),
    },
  });
