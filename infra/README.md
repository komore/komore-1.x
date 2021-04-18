# Infrastructure

TODO

## DNS

### Github
TEXT _github-challenge-komore.komore.dev. "c77e008428"

### Gmail
TEXT komore.dev.                           google-site-verification=BkVLt_Q6iIAXMVGA4tzJSt8cN2Q0Y4ataB0x6gGGW0U

### Sendgrid
CNAME em495.komore.dev                     u20110364.wl115.sendgrid.net
CNAME s1._domainkey.komore.dev             s1.domainkey.u20110364.wl115.sendgrid.net
CNAME s2._domainkey.komore.dev             s2.domainkey.u20110364.wl115.sendgrid.net

```ts
route53Zone('zone', {
  name: 'komore.dev'
}),
route53Record('record1', 
  
})
```
