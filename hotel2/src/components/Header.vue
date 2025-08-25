<template>
  <nav id="nav">
    <div class="inner">
      <div class="wrap">
        <div class="info">
          <h1><i class="fa-solid fa-sailboat"></i> 모두의호텔</h1>
          체크인 : PM 3:00 ~ <br />
          체크아웃 : AM 11:00
        </div>
      </div>

      <nav class="menu">
        <ul>
          <li :class="{ active: $route.path === '/' }">
            <router-link to="/">
              <span><i class="fa-solid fa-hotel"></i></span>메인화면
            </router-link>
          </li>
          <li :class="{ active: $route.path === '/hotel' }">
            <router-link to="/hotel">
              <span><i class="fa-solid fa-circle-info"></i></span>호텔안내
            </router-link>
          </li>
          <li :class="{ active: $route.path === '/rooms' }">
            <router-link to="/rooms">
              <span><i class="fa-solid fa-bed"></i></span>객실안내
            </router-link>
          </li>
          <li :class="{ active: $route.path === '/facilities' }">
            <router-link to="/facilities">
              <span><i class="fa-solid fa-bell-concierge"></i></span>편의시설
            </router-link>
          </li>
          <li :class="{ active: $route.path === '/events' }">
            <router-link to="/events">
              <span><i class="fa-solid fa-calendar-days"></i></span>이벤트
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </nav>
</template>
