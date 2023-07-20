import cx from 'classnames';
import gsap from 'gsap';
import Image from 'next/image';
import { UseControllerProps, useController } from 'react-hook-form'; /* prettier-ignore */
/* prettier-ignore */ type SHFprops = {} & UseControllerProps<any>;
/* prettier-ignore */ export function ShowHiddenField(props: SHFprops) { const { field } = useController({ ...props, defaultValue: false }); return (<div onClick={() => field.onChange(!field.value)} className="flex cursor-pointer gap-[10px] items-center" > <Image src={field.value ? '/images/eye-slash.svg' : '/images/eye.svg'} width={20} height={20} alt="eye" className="cursor-pointer" /> <div className='text-lg font-semibold'>{field.value ? 'Hide' : 'Show'}</div>  </div>); }


