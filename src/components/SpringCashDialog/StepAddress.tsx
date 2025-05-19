import { FlowerPattern } from '@/lib/icons';
import { Button } from '../ui/button';
import { X } from 'lucide-react';

import { Form, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { FloatingLabelInput } from '@/molecules/FloatingInput';

interface AddressCardProps {
  name: string;
  address1: string;
  city: string;
}

interface StepAddressProps {
  form: any;
  onNext: any;
  name: string;
  address1: string;
  city: string;
  setOpen: any;
}

const StepAddress = ({
  form,
  onNext,
  name,
  address1,
  city,
  setOpen
}: StepAddressProps) => {
  const handleSubmit = form.handleSubmit(() => onNext());

  return (
    <>
      <div className="absolute opacity-20 hidden lg:flex right-1/2 top-0">
        <FlowerPattern flipX={true} />
      </div>
      <div className="absolute opacity-20 hidden lg:flex bottom-0 left-0">
        <FlowerPattern rotate={180} flipX={true} />
      </div>
      <div className="w-full order-2 lg:order-1 lg:w-1/2 min-h-[638px] flex justify-center bg-transparent relative">
        <div className="absolute -top-6 -left-7 opacity-20 flex lg:hidden">
          <FlowerPattern />
        </div>
        <div className="absolute bottom-0 -right-7 opacity-20 flex lg:hidden">
          <FlowerPattern rotate={180} />
        </div>
        <AddressCard name={name} address1={address1} city={city} />
      </div>
      <div className="bg-white order-1 lg:order-2 rounded-2xl shadow-xl p-8 relative z-20 w-full lg:w-1/2 h-full flex flex-col justify-center gap-6 font-mackinac min-h-[638px]">
        <div
          className="bg-[#F9F9F9] rounded-full absolute top-5 right-5 size-6 p-1"
          onClick={() => setOpen(false)}
        >
          <X className="text-[#333333] size-4" strokeWidth={0.8} />
        </div>
        <div className="font-[500] text-[32px] leading-[115%] -tracking-[2%] text-[#444444] text-center">
          Please edit details below if incorrect.
        </div>
        <div className="flex w-full justify-center">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="space-y-4"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FloatingLabelInput {...field} id="name" label="Name" />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="address1"
                render={({ field }) => (
                  <FormItem>
                    <FloatingLabelInput
                      {...field}
                      id="address1"
                      label="Address Line 1"
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="address2"
                render={({ field }) => (
                  <FormItem>
                    <FloatingLabelInput
                      {...field}
                      id="address2"
                      label="Address Line 2"
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex gap-4">
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FloatingLabelInput {...field} id="city" label="City" />
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="zip"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FloatingLabelInput
                        {...field}
                        id="zip"
                        label="Zip Code"
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button
                type="submit"
                style={{
                  backgroundImage: `
      linear-gradient(0deg, rgba(0, 225, 211, 0.3), rgba(0, 225, 211, 0.3)),
      linear-gradient(173deg, #BDFFFF 0%, #B9E5E5 5.57%, #56BEBA 21.83%, #10847A 78.85%, #056B62 100%)
    `,
                  boxShadow: '0px 6px 10px 0px #14A79D4D',
                  color: 'white',
                  border: 'none'
                }}
                className="w-full py-3 mt-4 rounded-lg font-medium text-lg hover:opacity-90 transition !border-none focus:outline-none focus:ring-0"
              >
                Text me my $25 Visa card
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
};

const AddressCard = ({ name, address1, city }: AddressCardProps) => {
  return (
    <div className="absolute top-[180px] -left-7 w-[434px] h-[458px] font-mono">
      <img src={`/images/ID.png`} alt="Address" className="w-full h-full" />
      <div className="w-full relative">
        <div className="absolute bottom-[296px] left-[115px] text-black text-[56px] -tracking-[2px] font-medium font-signature -rotate-[5.42deg] leading-[1.1] h-[70px]">
          {name}
        </div>

        <div className="absolute bottom-[274px] left-[99px] text-white text-[18px] tracking-[0.1em] font-medium">
          {name}
        </div>

        <div className="absolute bottom-[252px] left-[132px] text-white text-[16px] tracking-[0.1em] font-medium opacity-40">
          {address1
            ? address1.slice(1, address1.length - 1) + (city ? ', ' + city : '')
            : city || ''}
        </div>
      </div>
    </div>
  );
};

export default StepAddress;
