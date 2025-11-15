import { TabsToggle } from './components/Tabs';
import { Layout } from './components/Layout/Layout';
import { MotionSection } from './components/MotionComponents/MotionSection';

function App() {
  return (
    <Layout>
      <MotionSection delay={0.1}>
        <TabsToggle />
      </MotionSection>
    </Layout>
  );
}

export default App;
