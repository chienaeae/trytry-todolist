import { TestClientComponent } from 'ui';
import { TestServerComponent } from 'ui/server';

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.tailwind file.
   */
  return (
    <div>
      <TestClientComponent />
      <TestServerComponent />
    </div>
  );
}
