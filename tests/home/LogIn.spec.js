import { shallowMount } from '@vue/test-utils';
import LogIn from '@/components/home/LogInPage.vue';

describe('LogIn', () => 
{
    const wrapper = shallowMount(LogIn);

    test('test dummy function', () => 
    {
        expect(wrapper.vm.function()).toBe(false);
    });

    test('opens the modal when a function is called', async () => 
    {
        const wrapper = mount(MyComponent, 
        {
            global: 
            {
                stubs: 
                {
                    'b-modal': MockModal, // Replace 'b-modal' with the name of the BootstrapVue modal component in your code
                },
            },
        });

        // Call the function that opens the modal
        await wrapper.vm.myFunction();

        // Assert that the modal is shown
        expect(wrapper.findComponent(MockModal).isVisible()).toBe(true);
    });
});
