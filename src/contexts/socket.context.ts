import { createContext } from 'react';
import { Socket } from 'socket.io-client';
import {
  UPDATE_SOCKET,
  UPDATE_USER_LIST,
  RESET_CHART,
  UPDATE_BLUE_CLICK,
  UPDATE_ORANGE_CLICK
} from '../constants/reducer.constant'

export interface ISocketContextState {
  socket: Socket | undefined;
  users: string[];
  orange: number;
  blue: number;
}

export const defaultSocketContextState: ISocketContextState = {
  socket: undefined,
  users: [],
  orange: 0,
  blue: 0
};

export type TSocketContextActions = 
'update-socket' | 'update-user-list' | 'reset-click' |
'update-orange' | 'update-blue' | 'reset-chart';
export type TSocketContextPayload = undefined | string[] | number | string | Socket;

export interface ISocketContextActions {
  type: TSocketContextActions;
  payload: TSocketContextPayload;
}

export const SocketReducer = (state: ISocketContextState, action: ISocketContextActions) => {

  switch (action.type) {
    case UPDATE_SOCKET:
      return { ...state, socket: action.payload as Socket };
    case UPDATE_USER_LIST:
      return { ...state, users: action.payload as string[] };
    case UPDATE_BLUE_CLICK:
      return {...state, blue: state.blue + 1}
    case UPDATE_ORANGE_CLICK:
      return {...state, orange: state.orange + 1}
    case RESET_CHART:
      return {...state, blue: 0, orange: 0}
    default:
      return state;
  }
};

export interface ISocketContextProps {
    SocketState: ISocketContextState;
    SocketDispatch: React.Dispatch<ISocketContextActions>;
}

const SocketContext = createContext<ISocketContextProps>({
    SocketState: defaultSocketContextState,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    SocketDispatch: () => {}
});

export const SocketContextConsumer = SocketContext.Consumer;
export const SocketContextProvider = SocketContext.Provider;

export default SocketContext;