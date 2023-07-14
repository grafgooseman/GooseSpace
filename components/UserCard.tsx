import Link from 'next/link';
import Image from 'next/image';

interface Props {
  id: string;
  name: string | null;
  age: number | null;
  image: string | null;
}

export default function UserCard({ id, name, age, image }: Props) {
  return (
    <div className='p-3 flex flex-col items-center border rounded-lg border-slate-300'>
      <Image
        className="rounded-xl"
        src={image ?? '/mememan.webp'}
        width={180}
        height={180}
        alt={`${name}'s profile`}
      />
      <div className='flex flex-col items-start pt-2 '>
        <h3 className='text-xl font-semibold hover:text-slate-500'>
          <Link href={`/users/${id}`}>{name}</Link>
        </h3>
        <p>Age: {age ? age : "not specified"}</p>
      </div>
    </div>
  );
}