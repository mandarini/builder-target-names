// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { Rlrb1 } from '@myorg/rlrb1';
import { Rlrb2 } from '@myorg/rlrb2';
import { Rlrswc1 } from '@myorg/rlrswc1';
import { Rlrswc2 } from '@myorg/rlrswc2';
import { Rlrv1 } from '@myorg/rlv1';
import { Rlrv2 } from '@myorg/rlv2';
import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div>
      <NxWelcome title="test" />
      <Rlrb1 />
      <Rlrb2 />
      <Rlrswc1 />
      <Rlrswc2 />
      <Rlrv1 />
      <Rlrv2 />
    </div>
  );
}

export default App;
