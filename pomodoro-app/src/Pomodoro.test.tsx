import Enzyme, {shallow} from "enzyme";
import Pomodoro from "./Pomodoro";

function setup() {
    return shallow(<Pomodoro />);
  }

describe('Pomodoro', () => {
    it('should render without error', () => {
        let wrapper = setup();
        const appComponent = wrapper.find(`[data-test="pomodoro-app"]`);
        expect(appComponent.length).toBe(1);
    });
})
