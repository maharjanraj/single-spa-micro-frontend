import { state } from '@dc/state';
import { useNavigate } from 'react-router-dom';

function Page2() {
  const navigate = useNavigate();

  console.log(state.getDevice());
  return (
    <div>
      Page2 Selected Device: {state.getDevice()}
      <button onClick={() => navigate('/page1')}>Prev</button>
    </div>
  );
}

export default Page2;
