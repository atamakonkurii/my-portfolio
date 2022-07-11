import { AboutAuthorElement } from "src/component/molecules/AboutAuthorElement";
import { ArticleWork } from "src/component/molecules/ArticleWork";

export const AboutAuthorPageContainer = () => {
  return (
    <div className="container py-16 mx-auto w-11/12 max-w-lg">
      <div className="flex justify-center text-3xl font-bold">作者について</div>
      <AboutAuthorElement />
      <div className="flex justify-center mt-16 mb-8 text-2xl font-medium">
        最新記事
      </div>
      <div>
        <ArticleWork
          imageUrl={
            "https://res.cloudinary.com/zenn/image/upload/s--rmPlWUbe--/co_rgb:222%2Cg_south_west%2Cl_text:notosansjp-medium.otf_37_bold:%25E3%2581%258B%25E3%2581%259A%25E3%2581%258A%2Cx_203%2Cy_98/c_fit%2Cco_rgb:222%2Cg_north_west%2Cl_text:notosansjp-medium.otf_70_bold:TypeScript%25E3%2581%25AE%25E3%2582%25AA%25E3%2583%2596%25E3%2582%25B8%25E3%2582%25A7%25E3%2582%25AF%25E3%2583%2588%25EF%25BC%2588%25E3%2582%25AF%25E3%2583%25A9%25E3%2582%25B9%25E4%25BB%25A5%25E5%25A4%2596%25EF%25BC%2589%25E3%2582%2592%25E7%2590%2586%25E8%25A7%25A3%25E3%2581%2599%25E3%2582%258B%2Cw_1010%2Cx_90%2Cy_100/g_south_west%2Ch_90%2Cl_fetch:aHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EtL0FPaDE0R2lVXzRoWm52dmhORjE1X2hBSHIwU0ZfZUpKMWk1S1hDVER3cTU1PXM5Ni1j%2Cr_max%2Cw_90%2Cx_87%2Cy_72/v1627274783/default/og-base_z4sxah.png"
          }
          link={"https://zenn.dev/atakon/articles/a2ea95c071bfa7"}
        />
      </div>

      <div className="mt-32">
        <ArticleWork
          imageUrl={
            "https://qiita-user-contents.imgix.net/https%3A%2F%2Fcdn.qiita.com%2Fassets%2Fpublic%2Farticle-ogp-background-9f5428127621718a910c8b63951390ad.png?ixlib=rb-4.0.0&w=1200&mark64=aHR0cHM6Ly9xaWl0YS11c2VyLWNvbnRlbnRzLmltZ2l4Lm5ldC9-dGV4dD9peGxpYj1yYi00LjAuMCZ3PTkxNiZ0eHQ9UmFpbHMlRTMlODElQTclRTQlQkQlOUMlRTMlODElQTMlRTMlODElOUYlRTYlOTclQTUlRTYlOUMlQUMlRTMlODAlODElRTUlOEYlQjAlRTYlQjklQkUlRTglOEYlQUYlRTglQUElOUUlRTUlQUYlQkUlRTUlQkYlOUMlRTMlODElQUUlRTMlODMlOTYlRTMlODMlQUQlRTMlODIlQjAlRTYlQTclOEIlRTYlODglOTAmdHh0LWNvbG9yPSUyMzIxMjEyMSZ0eHQtZm9udD1IaXJhZ2lubyUyMFNhbnMlMjBXNiZ0eHQtc2l6ZT01NiZ0eHQtY2xpcD1lbGxpcHNpcyZ0eHQtYWxpZ249bGVmdCUyQ3RvcCZzPWE2N2Q3MmFiNzdkOTA4MjZlZDZmYzllNjk2NDg5NzY0&mark-x=142&mark-y=112&blend64=aHR0cHM6Ly9xaWl0YS11c2VyLWNvbnRlbnRzLmltZ2l4Lm5ldC9-dGV4dD9peGxpYj1yYi00LjAuMCZ3PTYxNiZ0eHQ9JTQwYXRhbWFrb25rdXJpaSZ0eHQtY29sb3I9JTIzMjEyMTIxJnR4dC1mb250PUhpcmFnaW5vJTIwU2FucyUyMFc2JnR4dC1zaXplPTM2JnR4dC1hbGlnbj1sZWZ0JTJDdG9wJnM9N2UyZjhhNzMwMGQxMjg2YTZiOTY5ZTZjMzNkNWMyMmU&blend-x=142&blend-y=491&blend-mode=normal&s=7f6e5922371dce43b369f6735ec6c463"
          }
          link={"https://qiita.com/atamakonkurii/items/8eb7f10bcfdb73324270"}
        />
      </div>
    </div>
  );
};
