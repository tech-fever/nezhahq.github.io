import{_ as o,c as t,o as u,d as e}from"./app.2c402e15.js";const v='{"title":"API\u63A5\u53E3\uFF08\u5141\u8BB8\u4F7F\u7528API Token\u8BA4\u8BC1\u4E0ECookies\u8BA4\u8BC1\uFF09","description":"","frontmatter":{},"headers":[{"level":2,"title":"API\u63A5\u53E3\uFF08\u5141\u8BB8\u4F7F\u7528API Token\u8BA4\u8BC1\u4E0ECookies\u8BA4\u8BC1\uFF09","slug":"api\u63A5\u53E3\uFF08\u5141\u8BB8\u4F7F\u7528api-token\u8BA4\u8BC1\u4E0Ecookies\u8BA4\u8BC1\uFF09"}],"relativePath":"guide/api.md"}',q={},n=e(`<h2 id="api\u63A5\u53E3\uFF08\u5141\u8BB8\u4F7F\u7528api-token\u8BA4\u8BC1\u4E0Ecookies\u8BA4\u8BC1\uFF09" tabindex="-1">API\u63A5\u53E3\uFF08\u5141\u8BB8\u4F7F\u7528API Token\u8BA4\u8BC1\u4E0ECookies\u8BA4\u8BC1\uFF09 <a class="header-anchor" href="#api\u63A5\u53E3\uFF08\u5141\u8BB8\u4F7F\u7528api-token\u8BA4\u8BC1\u4E0Ecookies\u8BA4\u8BC1\uFF09" aria-hidden="true">#</a></h2><p>Token\u8BA4\u8BC1\u65B9\u5F0F\uFF1A</p><div class="language-"><pre><code>Request Headers:  
Authorization: Token
</code></pre></div><p>\u83B7\u53D6\u670D\u52A1\u5668\u5217\u8868\uFF1A<code>GET /api/v1/server/list?tag=</code></p><p>query: tag (ServerTag \u63D0\u4F9B\u6B64\u53C2\u6570\u5219\u4EC5\u67E5\u8BE2\u8BE5\u5206\u7EC4\u4E0B\u7684\u670D\u52A1\u5668)</p><div class="language-"><pre><code>{
    &quot;code&quot;: 0,
    &quot;message&quot;: &quot;success&quot;,
    &quot;result&quot;: [
        {
            &quot;id&quot;: 1,
            &quot;name&quot;: &quot;ServerName&quot;,
            &quot;tag&quot;: &quot;ServerTag&quot;,
            &quot;ipv4&quot;: &quot;1.1.1.1&quot;,
            &quot;ipv6&quot;: &quot;&quot;,
            &quot;valid_ip&quot;: &quot;1.1.1.1&quot;
        }
    ]
}
</code></pre></div><p>\u83B7\u53D6\u670D\u52A1\u5668\u8BE6\u60C5\uFF1A<code>GET /api/v1/server/details?id=&amp;tag=</code><br> query: id (ServerID \u4EE5\u9017\u53F7\u5206\u9694 \u63D0\u4F9B\u6B64\u53C2\u6570\u5219\u67E5\u8BE2\u8BE5\u5217\u8868\u5BF9\u5E94\u7684\u670D\u52A1\u5668 \u540C\u65F6\u65E0\u89C6tag\u53C2\u6570)<br> query: tag (ServerTag \u63D0\u4F9B\u6B64\u53C2\u6570\u5219\u4EC5\u67E5\u8BE2\u8BE5\u5206\u7EC4\u4E0B\u7684\u670D\u52A1\u5668)</p><div class="language-"><pre><code>{
    &quot;code&quot;: 0,
    &quot;message&quot;: &quot;success&quot;,
    &quot;result&quot;: [
        {
            &quot;id&quot;: 1,
            &quot;name&quot;: &quot;ServerName&quot;,
            &quot;tag&quot;: &quot;ServerTag&quot;,
            &quot;ipv4&quot;: &quot;1.1.1.1&quot;,
            &quot;ipv6&quot;: &quot;&quot;,
            &quot;valid_ip&quot;: &quot;1.1.1.1&quot;,
            &quot;host&quot;: {
                &quot;Platform&quot;: &quot;darwin&quot;,
                &quot;PlatformVersion&quot;: &quot;12.3.1&quot;,
                &quot;CPU&quot;: [
                    &quot;Apple M1 Pro 1 Physical Core&quot;
                ],
                &quot;MemTotal&quot;: 17179869184,
                &quot;DiskTotal&quot;: 2473496842240,
                &quot;SwapTotal&quot;: 0,
                &quot;Arch&quot;: &quot;arm64&quot;,
                &quot;Virtualization&quot;: &quot;&quot;,
                &quot;BootTime&quot;: 1652683962,
                &quot;CountryCode&quot;: &quot;hk&quot;,
                &quot;Version&quot;: &quot;&quot;
            },
            &quot;status&quot;: {
                &quot;CPU&quot;: 10.94117647050606,
                &quot;MemUsed&quot;: 14150975488,
                &quot;SwapUsed&quot;: 0,
                &quot;DiskUsed&quot;: 2138323378176,
                &quot;NetInTransfer&quot;: 652628744,
                &quot;NetOutTransfer&quot;: 465447325,
                &quot;NetInSpeed&quot;: 2156,
                &quot;NetOutSpeed&quot;: 4254,
                &quot;Uptime&quot;: 157738,
                &quot;Load1&quot;: 3.82373046875,
                &quot;Load5&quot;: 3.74169921875,
                &quot;Load15&quot;: 4.5966796875,
                &quot;TcpConnCount&quot;: 214,
                &quot;UdpConnCount&quot;: 48,
                &quot;ProcessCount&quot;: 451
            }
        }
    ]
}
</code></pre></div>`,8),a=[n];function r(i,s,d,p,c,l){return u(),t("div",null,a)}var T=o(q,[["render",r]]);export{v as __pageData,T as default};
