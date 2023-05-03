package tn.esprit.atomslab.Configuration;


import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import tn.esprit.atomslab.Security.JwtAuthenticationFilter;
import org.springframework.security.authentication.AuthenticationProvider;


@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfiguration {
    private final JwtAuthenticationFilter jwtAuthFilter;
    private final AuthenticationProvider authenticationProvider;


    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws
            Exception{
        return http.csrf(csrf -> csrf.disable())
                .authorizeRequests(auth -> auth.antMatchers("/authentication/**").permitAll())
                .authorizeRequests(auth -> auth.antMatchers("/passwordreset/**").permitAll())
                .authorizeRequests(auth -> auth.  antMatchers("/v2/api-docs",
                        "/configuration/ui",
                        "/swagger-resources/**",
                        "/configuration/security",
                        "/swagger-ui.html",
                        "/webjars/**").permitAll())
                .authorizeRequests(auth ->auth.antMatchers("/user").hasRole("ADMIN"))
                .authorizeRequests(auth -> auth.anyRequest().permitAll())
                //.authorizeRequests(auth -> auth.anyRequest().authenticated())
                .sessionManagement(session ->session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authenticationProvider(authenticationProvider)
                .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class)
                .build();
    }
}
