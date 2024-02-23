
import Image from 'next/image'

function Logo() {
  return (
    <div>
        <Image
            src="/image/logo/logo.jpg"
            alt="Vercel Logo"
            width={50}
            height={16}
        />
    </div>
  )
}

export default Logo
