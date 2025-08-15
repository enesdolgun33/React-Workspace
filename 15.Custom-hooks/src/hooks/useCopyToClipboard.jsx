import React, { useState } from 'react'

function useCopyToClipboard(text) {

    const [copied, setCopied] = useState(false)

    const copy = () => {
        navigator.clipboard.writeText(text) //promise dondugu ıcın then ve catchlerı kullandık
            .then(() => setCopied(true)) //basarılı sekılde kopyalarsak then calısır
            .catch(() => setCopied(false)) //hata varsa catch calısıp false dondurur
    }
    return [copied, copy] //array olarak donduk
}

export default useCopyToClipboard