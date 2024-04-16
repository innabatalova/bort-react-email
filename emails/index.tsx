import * as React from "react"
import { Html, Container, Tailwind, Head, Font, Link, Img, Text, Section, Row, Column } from "@react-email/components"
import { styleConfig } from "./_styles/styleConfig.ts"
import { listMarker } from "./_styles/components/listMarker/listMarker.ts"

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
            <Img src="/static/logo_v_sapke.png" className="w-mobile lg:w-screen-logo h-mobile lg:h-[86px] pt-[30px] m-auto" alt="Перейти на сайт" />
          </Link>
          <Link href="https://bort.ru/izmelchiteli-othodov/" >
            <Img src="/static/news-banner.jpg" className="w-mobile lg:w-screen h-mobile lg:h-[40px] p-mobile lg:p-screen" alt="Новые измельчители Bort с полным контролем" />
          </Link>
          <Link href="https://bort.ru/izmelchiteli-othodov/" >
            <Img src="/static/overtop-banner.jpg" className="w-mobile lg:w-screen h-mobile lg:h-[85px] p-mobile lg:p-screen" alt="Новые измельчители Bort с полным контролем" />
          </Link>
          <Link href="https://bort.ru/izmelchiteli-othodov/" >
            <Img src="/static/banner-main.jpg" className="w-mobile lg:w-screen h-mobile lg:h-[518px] p-mobile lg:p-screen" alt="Новые измельчители Bort с полным контролем" />
          </Link>
          <Link href="https://bort.ru/izmelchiteli-othodov/" >
            <Img src="/static/text-banner.jpg" className="w-mobile lg:w-screen h-mobile lg:h-[280px] p-mobile lg:p-screen" alt="Новые измельчители Bort с полным контролем" />
          </Link>
          <Link href="https://bort.ru/izmelchiteli-othodov/" >
            <Img src="/static/buy-banner.jpg" className="w-mobile lg:w-screen h-mobile lg:h-[80px] pb-[10px]" alt="Новые измельчители Bort с полным контролем" />
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

          <Section>
            <Row className="mb-[40px]">
              <Column className="inline-block lg:table-cell float-none lg:float-right w-full lg:w-screen-block">
                <Link href="https://bort.ru/izmelchitel-pischevyh-othodov-bort-master-eco-control/">
                  <Img src="/static/master-main.jpg" className="w-full lg:w-screen-block lg:h-screen-block" alt="Измельчитель Bort Master Eco Control" title="Измельчитель Bort Master Eco Control" />
                </Link>
              </Column>
              <Column className="inline-block lg:table-cell float-none lg:float-left w-full lg:w-screen-text pl-0 lg:pl-[25px]">
                <Img src="/static/master-title.jpg" className="w-screen-title h-screen-title m-auto lg:m-0" alt="Измельчитель Bort Master Eco Control" title="Измельчитель Bort Master Eco Control" />
                <Text className="text-secondary lg:text-secondary text-center lg:text-left">
                  Улучшенная версия самого популярного измельчителя BORT MASTER ECO. <br />
                  Теперь с дистанционной кнопкой и автоотключением!
                </Text>
              </Column>
            </Row>
          </Section>

          <Section>
            <Row className="mb-[40px]">
              <Column className="inline-block lg:table-cell w-full lg:w-screen-block">
                <Link href="https://bort.ru/izmelchitel-pischevyh-othodov-bort-alligator-control/">
                  <Img src="/static/alligator-main.jpg" className="w-full lg:w-screen-block lg:h-screen-block" alt="Измельчитель Bort Alligator Control" title="Измельчитель Bort Alligator Control" />
                </Link>
              </Column>
              <Column className="inline-block lg:table-cell w-full lg:w-screen-text pl-0 lg:pl-[25px]">
                <Img src="/static/alligator-title.jpg" className="w-screen-title h-screen-title m-auto lg:m-0" alt="Измельчитель Bort Alligator Control" title="Измельчитель Bort Alligator Control" />
                <Text className="text-secondary lg:text-secondary text-center lg:text-left">
                  Новая модель с мощным асинхронным двигателем, беспроводным
                  управлением, автоотключением, реверсом, а также с
                  антибактериальным покрытием ионами серебра всех элементов дробления в
                  камере.</Text>
              </Column>
            </Row>
          </Section>
          <Img src="/static/compare-banner.jpg" className="w-mobile lg:w-screen h-mobile lg:h-[180px]" alt="Новые измельчители Bort с полным контролем" />

          <Section>
            <Row className="mb-[40px]">
              <Column className="inline-block lg:table-cell w-full lg:w-screen-block">
                <Link href="https://bort.ru/izmelchiteli-othodov/">
                  <Img src="/static/control-main.jpg" className="w-full lg:w-screen-block h-mobile lg:h-[350px]" alt="Новые измельчители Bort с полным контролем" title="Новые измельчители Bort с полным контролем" />
                </Link>
              </Column>
              <Column className="inline-block lg:table-cell w-full lg:w-screen-text pl-0 lg:pl-[25px]">
                <Img src="/static/control-title.jpg" className="w-screen-title h-screen-title m-auto lg:m-0" alt="Новые измельчители Bort с полным контролем" title="Новые измельчители Bort с полным контролем" />
                <Row className="mb-[10px] ml-[20px] lg:ml-[0]">
                  <Column className="align-top w-[21px]">
                    <div style={listMarker}></div>
                  </Column>
                  <Column>
                    <Text className="text-secondary lg:text-secondary m-0">Простая система установки</Text>
                  </Column>
                </Row>
                <Row className="mb-[10px] ml-[20px] lg:ml-[0]">
                  <Column className="align-top w-[21px]">
                    <div style={listMarker}></div>
                  </Column>
                  <Column>
                    <Text className="text-secondary lg:text-secondary m-0">Защита от перегрева, перегрузки и заклинивания</Text>
                  </Column>
                </Row>
                <Row className="mb-[10px] ml-[20px] lg:ml-[0]">
                  <Column className="align-top w-[21px]">
                    <div style={listMarker}></div>
                  </Column>
                  <Column>
                    <Text className="text-secondary lg:text-secondary m-0">Автоматическое выключение</Text>
                  </Column>
                </Row>
                <Row className="mb-[10px] ml-[20px] lg:ml-[0]">
                  <Column className="align-top w-[21px]">
                    <div style={listMarker}></div>
                  </Column>
                  <Column>
                    <Text className="text-secondary lg:text-secondary m-0">Непрерывное использование</Text>
                  </Column>
                </Row>
                <Row className="mb-[10px] ml-[20px] lg:ml-[0]">
                  <Column className="align-top w-[21px]">
                    <div style={listMarker}></div>
                  </Column>
                  <Column>
                    <Text className="text-secondary lg:text-secondary m-0">Возможность подключения слива посудомоечной машины</Text>
                  </Column>
                </Row>
              </Column>
            </Row>
          </Section>

          <Section>
            <Row className="mb-[40px]">
              <Column className="inline-block lg:table-cell float-none lg:float-right w-full lg:w-screen-block">
                <Link href="https://bort.ru/izmelchiteli-othodov/">
                  <Img src="/static/button-main.jpg" className="w-full lg:w-screen-block h-mobile lg:h-[340px]" alt="Новые измельчители Bort с полным контролем" title="Новые измельчители Bort с полным контролем" />
                </Link>
              </Column>
              <Column className="inline-block lg:table-cell float-none lg:float-left w-full lg:w-screen-text pl-0 lg:pl-[25px]">
                <Img src="/static/button-title.jpg" className="w-screen-title h-screen-title m-auto lg:m-0" alt="Новые измельчители Bort с полным контролем" title="Новые измельчители Bort с полным контролем" />
                <Text className="text-secondary lg:text-secondary text-center lg:text-left">
                  Автоматический предохранитель сработает при любой нестандартной
                  ситуации или повышенной нагрузке, измельчитель останется
                  работоспособным.
                </Text>
              </Column>
            </Row>
          </Section>

          <Section>
            <Row className="mb-[40px]">
              <Column className="inline-block lg:table-cell w-full lg:w-screen-block">
                <Link href="https://bort.ru/izmelchitel-pischevyh-othodov-bort-alligator-control/">
                  <Img src="/static/steel-main.jpg" className="w-full lg:w-screen-block h-mobile lg:h-[320px]" alt="Измельчитель Bort Alligator Control" title="Измельчитель Bort Alligator Control" />
                </Link>
              </Column>
              <Column className="inline-block lg:table-cell w-full lg:w-screen-text pl-0 lg:pl-[25px]">
                <Img src="/static/steel-title.jpg" className="w-screen-title h-screen-title m-auto lg:m-0" alt="Измельчитель Bort Alligator Control" title="Измельчитель Bort Alligator Control" />
                <Text className="text-secondary lg:text-secondary text-center lg:text-left">
                  Материал измельчительного элемента изготовлен из нержавеющей стали,
                  что обеспечивает надежную и гарантированную
                  работу на долгий срок службы.</Text>
              </Column>
            </Row>
          </Section>

          <Section>
            <Row className="mb-[40px]">
              <Column className="inline-block lg:table-cell float-none lg:float-right w-full lg:w-screen-block">
                <Link href="https://bort.ru/izmelchiteli-othodov/">
                  <Img src="/static/wireless-main.jpg" className="w-full lg:w-screen-block h-mobile lg:h-[290px]" alt="Новые измельчители Bort с полным контролем" title="Новые измельчители Bort с полным контролем" />
                </Link>
              </Column>
              <Column className="inline-block lg:table-cell float-none lg:float-left w-full lg:w-screen-text pl-0 lg:pl-[25px]">
                <Img src="/static/wireless-title.jpg" className="w-screen-title h-screen-title m-auto lg:m-0" alt="Новые измельчители Bort с полным контролем" title="Новые измельчители Bort с полным контролем" />
                <Text className="text-secondary lg:text-secondary text-center lg:text-left">
                  Автоматический предохранитель сработает при любой нестандартной
                  ситуации или повышенной нагрузке, измельчитель останется
                  работоспособным.
                </Text>
              </Column>
            </Row>
          </Section>

          <Link href="https://bort.ru/izmelchiteli-othodov/" >
            <Img src="/static/warranty-banner.jpg" className="w-mobile lg:w-screen h-mobile lg:h-[80px] pb-[10px]" alt="Новые измельчители Bort с полным контролем" />
          </Link>

          <Section className="mb-0 lg:mb-[10px]">
            <Row className="mb-0 lg:mb-[25px]">
              <Column className="inline-block lg:table-cell w-full lg:w-auto mb-[10px]">
                <Img src="/static/eco-icon.jpg" className="w-screen-advantages m-auto" alt="Экологические преимущества"/>
                <Text className="text-secondary lg:text-primary text-center mt-0">Экологические <br /> преимущества</Text>
              </Column>
              <Column className="inline-block lg:table-cell w-full lg:w-auto mb-[10px]">
                <Img src="/static/garbige-icon.jpg" className="w-screen-advantages m-auto" alt="Избавление от неприятных запахов"/>
                <Text className="text-secondary lg:text-primary text-center mt-0">Избавление от <br /> неприятных запахов</Text>
              </Column>
              <Column className="inline-block lg:table-cell w-full lg:w-auto mb-[10px]">
                <Img src="/static/many-icon.jpg" className="w-screen-advantages m-auto" alt="Экономия ресурсов"/>
                <Text className="text-secondary lg:text-primary text-center mt-0">Экономия <br/> ресурсов</Text>
              </Column>
            </Row>
          </Section>

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

        </Tailwind>
      </Container>
    </Html>
  );
}

export default Email
