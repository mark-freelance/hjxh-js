const Cookie =
    '_a42=38c8e6aa-9747-4c21-a36b-08808cad34ee;_bee=IyctlSCGL1k8SVLI2bTMNCIh9EpeZLCr;_crr=IyctlSCGL1k8SVLI2bTMNCIh9EpeZLCr;_f77=15d68fb8-7589-47f9-a16b-602aa543dea4;api_uid=rBQR42CCxYBbA0td1lZ/Ag==;rcgk=IyctlSCGL1k8SVLI2bTMNCIh9EpeZLCr;rckk=IyctlSCGL1k8SVLI2bTMNCIh9EpeZLCr;ru1k=15d68fb8-7589-47f9-a16b-602aa543dea4;ru2k=38c8e6aa-9747-4c21-a36b-08808cad34ee;_nano_fp=XpEalpgJlpUanqEjnC_SK3wNNb8aTwYnzsrY~rvh;csrfToken=Lp4dogp2X-EJ9AJU176_Uanz;SUB_PASS_ID=eyJ0Ijoia3JuNGRneUZXOHJmRnhlRXlDNWRCNStWRURQU2toK0pOOTY3dkVCaW93MWZ3R0E0RnlMQ2NWUWNDM3VXVWJLbCIsInYiOjEsInMiOjcsIm0iOjUwNjY3Mzk3MCwidSI6OTM5MTc4OTJ9;SUB_SYSTEM_ID=7;'

const loadCookie = (Cookie) => {
    var cookies = {}
    Cookie.split(';').forEach(s => {
        if(s.length > 0 && s.search('=')>0) {
            const [a, b] = s.split('=')
            cookies[a] = b
        }
    })
    return cookies
}

var cookies = loadCookie(Cookie)

var nano = cookies['_nano_fp']

console.log({nano})