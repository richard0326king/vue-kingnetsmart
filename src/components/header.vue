<template>
    <!-- Navbar -->
    <div class="navbar navbar-default mini-nav-wrap" role="navigation">
        <ul id="mini-nav" class="nav navbar-nav menu menu-left" style="_display: none;">
            <li>
                <a href="#">
                    <i class="glyphicon icon-home"></i>回首頁</a>
            </li>
        </ul>
        <ul class="nav navbar-nav pull-right menu nav-tips">
            <li style="display: none;">
                <br />
                <a>系統時間：
                    <span id="systemTime" runat="server"></span>(秒)</a>
            </li>
            <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                    <span id="m_name" runat="server"></span>
                    <b class="caret"></b>
                </a>
                <ul class="dropdown-menu dropdown-menu-admin" style="padding: 10px 0;">
                    <li style="border-top: 1px solid #efefef; text-align: right;">
                        <button id="logoutBtn" type="button" class="btn btn-sd btn-primary" style="margin-top: 10px; margin-right: 10px;">
                            <i class="icon-logout"></i>登出</button>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>
