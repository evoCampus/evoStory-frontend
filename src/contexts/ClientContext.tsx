import { createContext } from 'react';
import Client from '../Client';

const ClientContext = createContext<Client | undefined>(undefined);

export default ClientContext;
