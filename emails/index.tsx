import * as React from "react"
import { Html, Container, Tailwind, Head, Font, Link, Img, Text, Section, Row, Column } from "@react-email/components"
import { styleConfig } from "./_styles/styleConfig.ts"

const Email: React.FC = (): React.ReactElement => {
  return (
    <Html lang="ru">
      <Container>
        <Tailwind config={styleConfig} >
          <Head>
            <meta charSet="UTF-8" />
            <meta content="width=device-width, initial-scale=1" name="viewport" />
            <meta name="x-apple-disable-message-reformatting" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta content="telephone=no" name="format-detection" />
            <Font
              fontFamily="Roboto"
              fallbackFontFamily={['Helvetica', 'Arial', 'sans-serif']}
              webFont={{
                url: "https://fonts.googleapis.com/css2?family=Roboto:wght@;1,700;&display=swap",
                format: "woff2",
              }}
            />
            <title>Полный контроль с измельчителями Bort!</title>
            <style></style>
          </Head>
          <Link href="http://bort.ru/" >
            <Img src="/static/logo_v_sapke.png" className="w-mobile lg:w-screen-logo h-mobile pt-[30px] m-auto" style={{ height: "86px" }} alt="Перейти на сайт" />
          </Link>
          <Link href="https://bort.ru/izmelchiteli-othodov/" >
            <Img src="/static/news-banner.jpg" className="w-mobile lg:w-screen h-mobile p-mobile lg:p-screen" style={{ height: "40px" }} alt="Новые измельчители Bort с полным контролем" />
          </Link>
          <Link href="https://bort.ru/izmelchiteli-othodov/" >
            <Img src="/static/overtop-banner.jpg" className="w-mobile lg:w-screen h-mobile p-mobile lg:p-screen" style={{ height: "85px" }} alt="Новые измельчители Bort с полным контролем" />
          </Link>
          <Link href="https://bort.ru/izmelchiteli-othodov/" >
            <Img src="/static/banner-main.jpg" className="w-mobile lg:w-screen h-mobile p-mobile lg:p-screen" style={{ height: "518px" }} alt="Новые измельчители Bort с полным контролем" />
          </Link>
          <Link href="https://bort.ru/izmelchiteli-othodov/" >
            <Img src="/static/text-banner.jpg" className="w-mobile lg:w-screen h-mobile p-mobile lg:p-screen" style={{ height: "280px" }} alt="Новые измельчители Bort с полным контролем" />
          </Link>
          <Link href="https://bort.ru/izmelchiteli-othodov/" >
            <Img src="/static/buy-banner.jpg" className="w-mobile lg:w-screen h-mobile pb-[10px]" style={{ height: "80px" }} alt="Новые измельчители Bort с полным контролем" />
          </Link>

          <Section className="mb-[25px]">
            <Text className="text-secondary lg:text-primary text-center">Покупайте в любимом интернет-магазине</Text>

            <Row className="mb-0 lg:mb-[25px]">
              <Column className="inline-block lg:table-cell w-full lg:w-auto mb-[10px]">
                <Link href="https://www.ozon.ru/category/vstraivaemye-izmelchiteli-bytovyh-othodov-32683/bort-8682362/">
                  <Img src="/static/ozon-logo.png" className="w-screen-partners m-auto" alt="Перейти на сайт Ozon" title="Перейти на сайт Ozon" />
                </Link>
              </Column>
              <Column className="inline-block lg:table-cell w-full lg:w-auto mb-[10px]">
                <Link href="https://www.wildberries.ru/catalog/0/search.aspx?search=%D0%B8%D0%B7%D0%BC%D0%B5%D0%BB%D1%8C%D1%87%D0%B8%D1%82%D0%B5%D0%BB%D0%B8%20bort">
                  <Img src="/static/wb-logo.png" className="w-screen-partners m-auto" alt="Перейти на сайт WB" title="Перейти на сайт WB" />
                </Link>
              </Column>
              <Column className="inline-block lg:table-cell w-full lg:w-auto mb-[10px]">
                <Link href="https://bort.ru/izmelchiteli-othodov/">
                  <Img src="/static/bort-logo.png" className="w-screen-partners m-auto" alt="Перейти на сайт Bort" title="Перейти на сайт Bort" />
                </Link>
              </Column>
            </Row>
            <Row>
              <Column className="inline-block lg:table-cell w-full lg:w-auto mb-[10px]">
                <Link href="https://megamarket.ru/catalog/?q=%D0%B8%D0%B7%D0%BC%D0%B5%D0%BB%D1%8C%D1%87%D0%B8%D1%82%D0%B5%D0%BB%D0%B8%20bort">
                  <Img src="/static/mm-logo.png" className="w-screen-partners m-auto" alt="Перейти на сайт MM" title="Перейти на сайт MM" />
                </Link>
              </Column>
              <Column className="inline-block lg:table-cell w-full lg:w-auto mb-[10px]">
                <Link href="https://market.yandex.ru/catalog--izmelchiteli-pishchevykh-otkhodov/54938/list?parsed-glfilter=7893318%3A950013&text=%D0%B8%D0%B7%D0%BC%D0%B5%D0%BB%D1%8C%D1%87%D0%B8%D1%82%D0%B5%D0%BB%D0%B8%20bort&hid=1569931&rs=eJx9kb9LG2Ecxt9XT72-IFwzxUjxVZeMSUQw-CtIh0IXh3YQkcslXjFymnCXKCjI0aGKFqF_QMVOhXbp0NLT2HoOijhdHBw6RR2q4tBujt73UXBz-fDc8z7P9_1xqXWlqyCeBV7wM9gJfgTV2vvacuDV3pIOPJkr2mXt4Oy0sUtRW7WnIZnG7hhn04_3FprTvYlEssfla5f6Km9Q2ShfUNTw4xtn-5z5479CsneDIbPrxM2tfmInafacKGPwp4j1lR1KHg-QMzZEE_6j-4Xo-1XKx5F8hcmcMm4SyZeY-eQ3daNYTRCzCXL8RsrICPaaILoWMkPQHpKju7T6gXZnNtEtwT8k-jPQi5jQSdPYJ_hNcPqRnydn8wVOuAv9EXoASY9u55_TC_jz5Gdy5Gf2qJsZJmYFNMN9OVYncevXpOUSznYNfULT6p_JqW_Dd7HjMt7hunrE1aTRlzJ7e9LHXKgX__78rd98_R4ZWeOiTagq13iUS641xFomzTdGxSrL8I-LJJbUqCIVTYu15wynkNfzhl2sOKallyyjMKs7pmHnp-TeVXv8dKNDpFGJRIUUYaU7bzgVw3ro2KZTKs46hTnzvqinUN3a6ND4LdJT7Kk%2C&glfilter=7893318%3A950013">
                  <Img src="/static/yandex-logo.png" className="w-screen-partners m-auto" alt="Перейти на сайт Yandex" title="Перейти на сайт Yandex" />
                </Link>
              </Column>
              <Column className="inline-block lg:table-cell w-full lg:w-auto mb-[10px]">
                <Link href="https://www.dns-shop.ru/catalog/c7388eccefc74e77/izmelchiteli-pishhevyx-otxodov/?q=%D0%B8%D0%B7%D0%BC%D0%B5%D0%BB%D1%8C%D1%87%D0%B8%D1%82%D0%B5%D0%BB%D0%B8+bort&stock=now-today-tomorrow-later-out_of_stock&order=6">
                  <Img src="/static/dns-logo.png" className="w-screen-partners m-auto" alt="Перейти на сайт DNS" title="Перейти на сайт DNS" />
                </Link>
              </Column>
            </Row>
          </Section>

          <Img src="/static/compare-banner.jpg" className="w-mobile lg:w-screen h-mobile" style={{ height: "180px" }} alt="Новые измельчители Bort с полным контролем" />
          <Link href="https://bort.ru/izmelchiteli-othodov/" >
            <Img src="/static/warranty-banner.jpg" className="w-mobile lg:w-screen h-mobile pb-[10px]" style={{ height: "80px" }} alt="Новые измельчители Bort с полным контролем" />
          </Link>
        </Tailwind>
      </Container>
    </Html>
  );
}

export default Email
