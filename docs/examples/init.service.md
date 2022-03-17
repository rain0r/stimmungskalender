```shell
#!/sbin/openrc-run
# Copyright 1999-2017 Gentoo Foundation
# Distributed under the terms of the GNU General Public License v2

LC_ALL='en_US.UTF-8'
LANG='en_US.UTF-8'

export LC_ALL;
export LANG;


uwsgi_user="nginx"
uwsgi_group="nginx"
uwsgi_name="stimmungskalender"
uwsgi_dir="/srv/www/${uwsgi_name}"
stdout_logfile="/dev/null"
stderr_logfile="/dev/null"

pidfile="/var/run/uwsgi/${uwsgi_name}.pid"
name="uwsgi daemon for ${uwsgi_name}"
command="/usr/bin/uwsgi_python39"
command_args="/srv/www/${uwsgi_name}/${uwsgi_name}.ini"

depend() {
    need net
}


start() {
    ebegin "Starting ${uwsgi_name}"
    checkpath -dq -o ${uwsgi_user}:${uwsgi_group} -m 755 /var/run/uwsgi/
    start-stop-daemon --quiet --background \
        --user ${uwsgi_user}:${uwsgi_group} \
        --chdir ${uwsgi_dir} \
        --stderr ${stderr_logfile} \
        --pidfile ${pidfile} \
        --stdout ${stdout_logfile} \
        --exec ${command} -- ${command_args}
    eend $?
}

stop() {
    ebegin "Stopping ${uwsgi_name}"
    start-stop-daemon \
        --stop --progress --signal INT \
        --pidfile ${pidfile}
    RESULT=$?
    if [ $RESULT -eq 0 ]; then
        rm -f ${pidfile}
    fi
    eend $?
}
```