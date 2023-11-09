import { mount } from '@vue/test-utils';
import LogIn from '@/components/home/LogInPage.vue';

describe('LogIn', () => 
{
    const wrapper = mount(LogIn,
    {

    })

    test('Test component if existing', () => 
    {
        expect(wrapper.exists()).toBeTruthy();
    });

    // <b-button v-b-modal.modal-1>Launch demo modal</b-button>
    // <b-modal id="modal-1" title="BootstrapVue">
    //     <p class="my-4">Hello from modal!</p>
    // </b-modal>

    test('should render the modal after the button click', async () => 
    {
        const wrapper = mount(YourComponent);
    
        // Mock the $bvModal.show method
        const showSpy = jest.spyOn(wrapper.vm.$bvModal, 'show');
    
        // Trigger the button click
        await wrapper.find('b-button').trigger('click');
    
        // Wait for the next tick to allow the modal to render
        await wrapper.vm.$nextTick();
    
        // Assert that the modal show method was called with the correct arguments
        expect(showSpy).toHaveBeenCalledWith('modal-1');
    
        // Assert that the modal is rendered in the component
        expect(wrapper.find('#modal-1').exists()).toBe(true);
    
        // Restore the original show method after the test
        showSpy.mockRestore();
    });

    test('Test audio', async () => 
    {
        document.getElementById = jest.fn(() => 
        ({
            currentTime: 0,
            play: jest.fn(),
        }));

        const playSpy = jest.spyOn(wrapper.vm.$el.querySelector('#buttonClickSFX'), 'play');

        await wrapper.vm.validateUser();
        await wrapper.vm.$nextTick();

        expect(wrapper.vm.$el.querySelector('#buttonClickSFX').play).toHaveBeenCalled();

        playSpy.mockRestore();
    });
});
