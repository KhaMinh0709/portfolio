---
layout: '@/templates/BasePost.astro'
title: Cách thêm tài liệu Swagger vào Spring Boot
description: Hướng dẫn chi tiết cách thêm và cấu hình Swagger để tạo tài liệu API cho ứng dụng Spring Boot.
pubDate: 2020-02-04T00:00:00Z
imgSrc: '/assets/images/image-post3.jpeg'
imgAlt: 'Image post 3'
---

### Giới thiệu về Swagger

Swagger là một công cụ phổ biến để tự động tạo tài liệu cho các REST API. Khi tích hợp Swagger vào ứng dụng Spring Boot, nó giúp bạn tạo tài liệu chi tiết và dễ hiểu về API mà không cần viết tay.

### Cách thêm Swagger vào Spring Boot

Để tích hợp Swagger vào Spring Boot, bạn cần thực hiện các bước sau:

#### 1. Thêm dependency vào `pom.xml`

Bạn cần thêm các dependency liên quan đến Swagger vào file `pom.xml`:

```xml
<dependency>
    <groupId>org.springdoc</groupId>
    <artifactId>springdoc-openapi-ui</artifactId>
    <version>1.6.15</version> <!-- Bạn có thể kiểm tra phiên bản mới nhất -->
</dependency>
```

### 2. Thêm cấu hình Swagger
```java
@Configuration
public class SwaggerConfig {

    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                    .title("Booking Trains Ticket API")
                    .version("1.0")
                    .description("Tài liệu API cho hệ thống đặt vé tàu"));
    }

    @Bean
    public GroupedOpenApi publicApi() {
        return GroupedOpenApi.builder()
                .group("public")
                .pathsToMatch("/api/**")
                .build();
    }
}
```

### 3. chạy ứng dụng

Bạn có thể truy cập tài liệu Swagger thông qua đường dẫn sau:
```bash
http://localhost:8080/swagger-ui.html
```
Swagger UI sẽ cung cấp một giao diện người dùng cho phép bạn duyệt qua các endpoint, xem chi tiết về từng API (như phương thức HTTP, đường dẫn, các tham số đầu vào, đầu ra), và thậm chí thực hiện các request thử nghiệm trực tiếp.