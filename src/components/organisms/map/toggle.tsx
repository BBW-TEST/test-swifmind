import { Switch } from '@/components/ui/switch';

interface ToggleProps {
  toggleLayer: () => void;
  layerVisible: boolean;
}

const Toggle: React.FC<ToggleProps> = ({ toggleLayer, layerVisible }) => (
  <div style={{ position: 'absolute', top: 10, left: 10, zIndex: 1000 }}>
    <Switch checked={layerVisible} onCheckedChange={toggleLayer}>
      Toggle Layer
    </Switch>
  </div>
);

export default Toggle;
