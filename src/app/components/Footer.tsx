'use client'

import ImprintDialog from './ImprintDialog'
import PrivacyPolicyDialog from './PrivacyPolicyDialog '

export default function Footer() {
  return (
    <footer className="bg-[#eaf7eb] border-t border-gray-300 text-sm text-black py-4 px-6">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p>© 2025 E-tan. Minden jog fenntartva.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <PrivacyPolicyDialog />
          <ImprintDialog />
        </div>
      </div>
    </footer>
  )
}
