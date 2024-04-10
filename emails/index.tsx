import * as React from "react"
import { Html, Container, Tailwind, Head, Font, Link, Img, Text } from "@react-email/components"
import { styleConfig } from "./_styles/styleConfig.ts"

const Email = () => {
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
            <Img src="/static/logo_v_sapke.png" className="w-mobile lg:w-screen-logo h-mobile" style={{ height: "86px", paddingTop: "30px", margin: "auto" }} alt="Перейти на сайт" />
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
          <Text className="text-primary lg:text-primary">Покупайте в любимом интернет-магазине 1111</Text>
          <Link href="https://bort.ru/izmelchiteli-othodov/" >
            <Img src="/static/buy-banner.jpg" className="w-mobile lg:w-screen h-mobile" style={{ height: "80px", paddingBottom: "10px" }} alt="Новые измельчители Bort с полным контролем" />
          </Link>
          <Text className="text-secondary lg:text-secondary">Покупайте в любимом интернет-магазине 22222</Text>
          <Img src="/static/compare-banner.jpg" className="w-mobile lg:w-screen h-mobile" style={{ height: "180px" }} alt="Новые измельчители Bort с полным контролем" />
          <Link href="https://bort.ru/izmelchiteli-othodov/" >
            <Img src="/static/warranty-banner.jpg" className="w-mobile lg:w-screen h-mobile" style={{ height: "80px", paddingBottom: "10px" }} alt="Новые измельчители Bort с полным контролем" />
          </Link>
          <Text className="text-primary lg:text-primary">Покупайте в любимом интернет-магазине 565623</Text>
        </Tailwind>
      </Container>
    </Html>
  );
}

export default Email
