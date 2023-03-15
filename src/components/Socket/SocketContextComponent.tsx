import React, { PropsWithChildren, useEffect, useReducer } from 'react';
import { useSocket } from '../../hooks/useSocket';
import { defaultSocketContextState, SocketContextProvider, SocketReducer } from '../../contexts/socket.context';
import {
  RESET_CHART,
  UPDATE_BLUE_CLICK,
  UPDATE_ORANGE_CLICK,
  UPDATE_SOCKET
} from '../../constants/reducer.constant';
import {
  UPDATE_BLUE_EVENT,
  UPDATE_ORANGE_EVENT,
  RESET_ORANGE_BLUE_EVENT
} from '../../constants/socket.constant'
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ISocketContextComponentProps extends PropsWithChildren {}

const SocketContextComponent: React.FunctionComponent<ISocketContextComponentProps> = (props) => {
    const { children } = props;

    const socket = useSocket(
      process.env.BACKEND_IP ? process.env.BACKEND_IP: 'ws://54.169.70.63', 
      {
        reconnectionAttempts: 5,
        reconnectionDelay: 1000,
        autoConnect: false
      }
    );

    const [SocketState, SocketDispatch] = useReducer(SocketReducer, defaultSocketContextState);

    useEffect(() => {
      socket.connect()
      SocketDispatch({type: UPDATE_SOCKET, payload: socket})
      StartListeners()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    //check status connect socket.io
    const StartListeners = () => {
        // handle messages
        socket.on(UPDATE_BLUE_EVENT, (data: {socketId: string})=> {
          SocketDispatch({type: UPDATE_BLUE_CLICK, payload: data.socketId})
        })

        socket.on(UPDATE_ORANGE_EVENT,(data: {socketId: string}) => {
          SocketDispatch({type: UPDATE_ORANGE_CLICK, payload: data.socketId})
        })

        socket.on(RESET_ORANGE_BLUE_EVENT, () => {
          SocketDispatch({type: RESET_CHART, payload: undefined})
        })

        /** Connection / reconnection listeners */
        socket.io.on('reconnect', (attempt) => {
            console.info('Reconnected on attempt: ' + attempt);
        });

        socket.io.on('reconnect_attempt', (attempt) => {
            console.info('Reconnection Attempt: ' + attempt);
        });

        socket.io.on('reconnect_error', (error) => {
            console.info('Reconnection error: ' + error);
        });

        socket.io.on('reconnect_failed', () => {
            console.info('Reconnection failure.');
            alert('We are unable to connect you to the chat service.  Please make sure your internet connection is stable or try again later.');
        });
    };


    return <SocketContextProvider value={{ SocketState, SocketDispatch }}>{children}</SocketContextProvider>;
};

export default SocketContextComponent;