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

    it('should display a 30 minute timer when the app is loaded', () => {
        let wrapper = setup();
        const appComponent = wrapper.find(`[data-test="timer"]`);
        expect(appComponent.length).toBe(1);
    });

    it('should display a play button when the app is loaded', () => {
        let wrapper = setup();
        const appComponent = wrapper.find(`[data-test="play-button"]`);
        expect(appComponent.length).toBe(1);
    });
});

