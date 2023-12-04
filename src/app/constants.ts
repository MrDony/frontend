export const _BACKEND_API_URL = ""
export const _PRODUCTION = false
export const _VERSION = "v0.0.1"




























export const DUMMY_DATA = {
    "system_warnings": {
        "haveged.service: Referenced but unset environment variable evaluates to an empty string: DAEMON_ARGS": {
            "priority": "4",
            "count": 6,
            "description": "Indicates a potential configuration issue with the haveged service, where an expected environment variable is not set. This might affect the randomness entropy pool, impacting system security and performance. Check haveged service configuration and ensure all required environment variables are correctly set."
        },
        "cron.service: Referenced but unset environment variable evaluates to an empty string: EXTRA_OPTS": {
            "priority": "4",
            "count": 6,
            "description": "A configuration warning in the cron service. Missing environment variables might lead to unexpected behavior in scheduled tasks. Review cron job configurations and verify that all necessary environment variables are defined."
        },
        "pcscd.service: Referenced but unset environment variable evaluates to an empty string: PCSCD_ARGS": {
            "priority": "4",
            "count": 8,
            "description": "This warning suggests a configuration issue in the PC/SC Smart Card Daemon, possibly affecting smart card operations. Ensure all necessary environment variables for pcscd are correctly set."
        },
        "[system] Activation via systemd failed for unit 'dbus-org.freedesktop.Avahi.service': Unit dbus-org.freedesktop.Avahi.service not found.": {
            "priority": "6",
            "count": 29,
            "description": "Failure to activate the Avahi service through systemd indicates issues with network service discovery, potentially affecting local network operations. Check Avahi daemon's configuration and systemd's logs for more details."
        },
        "[system] Activation via systemd failed for unit 'dbus-org.bluez.service': Unit dbus-org.bluez.service not found.": {
            "priority": "6",
            "count": 7,
            "description": "This indicates a failure in starting the Bluetooth service, which could affect Bluetooth connectivity and operations. Check the configuration and status of the Bluetooth service."
        },
        "file ../../../gio/gfileinfo.c: line 1699 (g_file_info_get_name): should not be reached": {
            "priority": "4",
            "count": 36,
            "description": "This log indicates a programming assertion failure in the GIO library. It may suggest a bug or a corrupt file. Investigate the file or operation that triggered this log for potential data corruption or application errors."
        }
    },
    "authentication_issues": {
        "pam_unix(lightdm:auth): authentication failure; logname= uid=0 euid=0 tty=:0 ruser= rhost=  user=root": {
            "priority": "5",
            "count": 1,
            "description": "This log indicates a failed authentication attempt in the LightDM display manager. If this occurs frequently, it might suggest attempted unauthorized access or need for user education on login credentials."
        },
        "pam_unix(sudo:auth): authentication failure; logname= uid=1000 euid=0 tty=/dev/pts/1 ruser=kali rhost=  user=kali": {
            "priority": "5",
            "count": 1,
            "description": "A failed sudo authentication attempt. Regular occurrences might indicate either forgetful legitimate users or potential unauthorized access attempts."
        },
        "    kali : 3 incorrect password attempts ; TTY=pts/1 ; PWD=/home/kali ; USER=root ; COMMAND=/usr/bin/apt update": {
            "priority": "1",
            "count": 1,
            "description": "This message shows repeated failed password attempts for a critical command execution, which might indicate a potential brute-force attack or user error in password entry. Assess the user's legitimacy and consider security measures against brute-force attacks."
        }
    },
    "user_activity": {
        "pam_unix(lightdm-greeter:session): session opened for user lightdm(uid=110) by (uid=0)": {
            "priority": "6",
            "count": 22,
            "description": "Session initiation for the LightDM greeter. Usually a routine part of desktop environment initialization, but frequent unexpected occurrences could warrant further investigation."
        },
        "pam_unix(systemd-user:session): session opened for user lightdm(uid=110) by (uid=0)": {
            "priority": "6",
            "count": 11,
            "description": "Session initiation by systemd for the LightDM user. Common during system startup or user login processes. Ensure these sessions align with expected user activity and system startups."
        },
        "pam_unix(cron:session): session opened for user root(uid=0) by (uid=0)": {
            "priority": "6",
            "count": 49,
            "description": "Indicates a new session for root user initiated by cron. This is typical for scheduled tasks running as root, but unexpected sessions might require scrutiny."
        },
        "kali: Error executing command as another user: Request dismissed [USER=root] [TTY=unknown] [CWD=/home/kali] [COMMAND=/usr/bin/x-terminal-emulator]": {
            "priority": "4",
            "count": 2,
            "description": "Indicates a failed attempt to execute a command as a different user. Could be a misconfiguration or a malicious activity if unauthorized. Investigate the command and the context in which it was executed for potential security breaches."
        },
        "pam_unix(polkit-1:session): session opened for user root(uid=0) by (uid=1000)": {
            "priority": "6",
            "count": 1,
            "description": "Indicates a session opened for the root user by polkit (PolicyKit). Usually related to administrative actions requiring elevated privileges. Confirm this activity is legitimate and authorized."
        },
        "kali: Executing command [USER=root] [TTY=unknown] [CWD=/home/kali] [COMMAND=/usr/bin/x-terminal-emulator]": {
            "priority": "5",
            "count": 1,
            "description": "No specific description available. Review the log entry's context and investigate related system or application settings. Consult system documentation or support for detailed information."
        },
        "    kali : TTY=pts/0 ; PWD=/home/kali/Desktop/infosec_project ; USER=root ; COMMAND=/usr/bin/apt install code-oss": {
            "priority": "5",
            "count": 1,
            "description": "No specific description available. Review the log entry's context and investigate related system or application settings. Consult system documentation or support for detailed information."
        },
        "pam_unix(sudo:session): session opened for user root(uid=0) by (uid=1000)": {
            "priority": "6",
            "count": 12,
            "description": "Indicates a new sudo session for the root user initiated by another user. Standard for executing commands with elevated privileges. Validate the legitimacy of these sudo requests."
        },
        "    kali : TTY=pts/0 ; PWD=/home/kali/Desktop/infosec_project ; USER=root ; COMMAND=/usr/bin/apt-get install wget gpg": {
            "priority": "5",
            "count": 2,
            "description": "No specific description available. Review the log entry's context and investigate related system or application settings. Consult system documentation or support for detailed information."
        },
        "    kali : TTY=pts/0 ; PWD=/home/kali/Desktop/infosec_project ; USER=root ; COMMAND=/usr/bin/apt update": {
            "priority": "5",
            "count": 3,
            "description": "No specific description available. Review the log entry's context and investigate related system or application settings. Consult system documentation or support for detailed information."
        },
        "    kali : TTY=pts/0 ; PWD=/home/kali/Desktop/infosec_project ; USER=root ; COMMAND=/usr/bin/install -D -o root -g root -m 644 packages.microsoft.gpg /etc/apt/keyrings/packages.microsoft.gpg": {
            "priority": "5",
            "count": 1,
            "description": "No specific description available. Review the log entry's context and investigate related system or application settings. Consult system documentation or support for detailed information."
        },
        "    kali : TTY=pts/0 ; PWD=/home/kali/Desktop/infosec_project ; USER=root ; COMMAND=/usr/bin/sh -c 'echo \"deb [arch=amd64,arm64,armhf signed-by=/etc/apt/keyrings/packages.microsoft.gpg] https://packages.microsoft.com/repos/code stable main\" > /etc/apt/sources.list.d/vscode.list'": {
            "priority": "5",
            "count": 1,
            "description": "No specific description available. Review the log entry's context and investigate related system or application settings. Consult system documentation or support for detailed information."
        },
        "    kali : TTY=pts/0 ; PWD=/home/kali/Desktop/infosec_project ; USER=root ; COMMAND=/usr/bin/apt install apt-transport-https": {
            "priority": "5",
            "count": 1,
            "description": "No specific description available. Review the log entry's context and investigate related system or application settings. Consult system documentation or support for detailed information."
        },
        "    kali : TTY=pts/0 ; PWD=/home/kali/Desktop/infosec_project ; USER=root ; COMMAND=/usr/bin/apt install code": {
            "priority": "5",
            "count": 2,
            "description": "No specific description available. Review the log entry's context and investigate related system or application settings. Consult system documentation or support for detailed information."
        },
        "    kali : TTY=pts/0 ; PWD=/home/kali/Desktop/infosec_project ; USER=root ; COMMAND=/usr/bin/code .": {
            "priority": "5",
            "count": 1,
            "description": "No specific description available. Review the log entry's context and investigate related system or application settings. Consult system documentation or support for detailed information."
        },
        "    kali : 3 incorrect password attempts ; TTY=pts/1 ; PWD=/home/kali ; USER=root ; COMMAND=/usr/bin/apt update": {
            "priority": "1",
            "count": 1,
            "description": "This message shows repeated failed password attempts for a critical command execution, which might indicate a potential brute-force attack or user error in password entry. Assess the user's legitimacy and consider security measures against brute-force attacks."
        }
    },
    "service_activity": {
        "dbus-daemon[996]: Activating service name='org.a11y.atspi.Registry' requested by ':1.0' (uid=110 pid=963 comm=\"/usr/sbin/lightdm-gtk-greeter\")": {
            "priority": "6",
            "count": 1,
            "description": "No specific description available. Review the log entry's context and investigate related system or application settings. Consult system documentation or support for detailed information."
        },
        "[session uid=1000 pid=1075] Activating service name='org.xfce.Xfconf' requested by ':1.16' (uid=1000 pid=1094 comm=\"xfce4-session\")": {
            "priority": "6",
            "count": 1,
            "description": "No specific description available. Review the log entry's context and investigate related system or application settings. Consult system documentation or support for detailed information."
        },
        "dbus-daemon[1203]: Activating service name='org.a11y.atspi.Registry' requested by ':1.0' (uid=1000 pid=1094 comm=\"xfce4-session\")": {
            "priority": "6",
            "count": 1,
            "description": "No specific description available. Review the log entry's context and investigate related system or application settings. Consult system documentation or support for detailed information."
        },
        "dbus-daemon[808]: Activating service name='org.a11y.atspi.Registry' requested by ':1.0' (uid=110 pid=768 comm=\"/usr/sbin/lightdm-gtk-greeter\")": {
            "priority": "6",
            "count": 1,
            "description": "No specific description available. Review the log entry's context and investigate related system or application settings. Consult system documentation or support for detailed information."
        },
        "[session uid=1000 pid=876] Activating service name='org.xfce.Xfconf' requested by ':1.16' (uid=1000 pid=902 comm=\"xfce4-session\")": {
            "priority": "6",
            "count": 1,
            "description": "No specific description available. Review the log entry's context and investigate related system or application settings. Consult system documentation or support for detailed information."
        },
        "dbus-daemon[1003]: Activating service name='org.a11y.atspi.Registry' requested by ':1.0' (uid=1000 pid=902 comm=\"xfce4-session\")": {
            "priority": "6",
            "count": 1,
            "description": "No specific description available. Review the log entry's context and investigate related system or application settings. Consult system documentation or support for detailed information."
        },
        "dbus-daemon[848]: Activating service name='org.a11y.atspi.Registry' requested by ':1.0' (uid=110 pid=807 comm=\"/usr/sbin/lightdm-gtk-greeter\")": {
            "priority": "6",
            "count": 1,
            "description": "No specific description available. Review the log entry's context and investigate related system or application settings. Consult system documentation or support for detailed information."
        },
        "[session uid=1000 pid=916] Activating service name='org.xfce.Xfconf' requested by ':1.16' (uid=1000 pid=942 comm=\"xfce4-session\")": {
            "priority": "6",
            "count": 1,
            "description": "No specific description available. Review the log entry's context and investigate related system or application settings. Consult system documentation or support for detailed information."
        },
        "dbus-daemon[1043]: Activating service name='org.a11y.atspi.Registry' requested by ':1.0' (uid=1000 pid=942 comm=\"xfce4-session\")": {
            "priority": "6",
            "count": 1,
            "description": "No specific description available. Review the log entry's context and investigate related system or application settings. Consult system documentation or support for detailed information."
        },
        "[session uid=1000 pid=916] Activating service name='org.xfce.Xfconf' requested by ':1.23' (uid=1000 pid=1115 comm=\"xfce4-panel\")": {
            "priority": "6",
            "count": 19,
            "description": "No specific description available. Review the log entry's context and investigate related system or application settings. Consult system documentation or support for detailed information."
        },
        "dbus-daemon[18290]: Activating service name='org.a11y.atspi.Registry' requested by ':1.0' (uid=110 pid=18252 comm=\"/usr/sbin/lightdm-gtk-greeter\")": {
            "priority": "6",
            "count": 1,
            "description": "No specific description available. Review the log entry's context and investigate related system or application settings. Consult system documentation or support for detailed information."
        },
        "[session uid=1000 pid=916] Activating service name='org.xfce.Xfconf' requested by ':1.22' (uid=1000 pid=1105 comm=\"xfsettingsd\")": {
            "priority": "6",
            "count": 5,
            "description": "No specific description available. Review the log entry's context and investigate related system or application settings. Consult system documentation or support for detailed information."
        },
        "[session uid=1000 pid=916] Activating service name='org.xfce.Xfconf' requested by ':1.34' (uid=1000 pid=1183 comm=\"/usr/lib/x86_64-linux-gnu/xfce4/notifyd/xfce4-noti\")": {
            "priority": "6",
            "count": 1,
            "description": "No specific description available. Review the log entry's context and investigate related system or application settings. Consult system documentation or support for detailed information."
        },
        "dbus-daemon[42256]: Activating service name='org.a11y.atspi.Registry' requested by ':1.0' (uid=110 pid=42215 comm=\"/usr/sbin/lightdm-gtk-greeter\")": {
            "priority": "6",
            "count": 1,
            "description": "No specific description available. Review the log entry's context and investigate related system or application settings. Consult system documentation or support for detailed information."
        },
        "dbus-daemon[55214]: Activating service name='org.a11y.atspi.Registry' requested by ':1.0' (uid=110 pid=55196 comm=\"/usr/sbin/lightdm-gtk-greeter\")": {
            "priority": "6",
            "count": 1,
            "description": "No specific description available. Review the log entry's context and investigate related system or application settings. Consult system documentation or support for detailed information."
        },
        "dbus-daemon[85863]: Activating service name='org.a11y.atspi.Registry' requested by ':1.0' (uid=110 pid=85824 comm=\"/usr/sbin/lightdm-gtk-greeter\")": {
            "priority": "6",
            "count": 1,
            "description": "No specific description available. Review the log entry's context and investigate related system or application settings. Consult system documentation or support for detailed information."
        },
        "dbus-daemon[104772]: Activating service name='org.a11y.atspi.Registry' requested by ':1.0' (uid=110 pid=104748 comm=\"/usr/sbin/lightdm-gtk-greeter\")": {
            "priority": "6",
            "count": 1,
            "description": "No specific description available. Review the log entry's context and investigate related system or application settings. Consult system documentation or support for detailed information."
        },
        "dbus-daemon[855]: Activating service name='org.a11y.atspi.Registry' requested by ':1.0' (uid=110 pid=815 comm=\"/usr/sbin/lightdm-gtk-greeter\")": {
            "priority": "6",
            "count": 1,
            "description": "No specific description available. Review the log entry's context and investigate related system or application settings. Consult system documentation or support for detailed information."
        },
        "[session uid=1000 pid=929] Activating service name='org.xfce.Xfconf' requested by ':1.16' (uid=1000 pid=954 comm=\"xfce4-session\")": {
            "priority": "6",
            "count": 1,
            "description": "No specific description available. Review the log entry's context and investigate related system or application settings. Consult system documentation or support for detailed information."
        },
        "dbus-daemon[1056]: Activating service name='org.a11y.atspi.Registry' requested by ':1.0' (uid=1000 pid=954 comm=\"xfce4-session\")": {
            "priority": "6",
            "count": 1,
            "description": "No specific description available. Review the log entry's context and investigate related system or application settings. Consult system documentation or support for detailed information."
        },
        "[session uid=1000 pid=929] Activating service name='org.xfce.Xfconf' requested by ':1.23' (uid=1000 pid=1129 comm=\"xfce4-panel\")": {
            "priority": "6",
            "count": 1,
            "description": "No specific description available. Review the log entry's context and investigate related system or application settings. Consult system documentation or support for detailed information."
        },
        "dbus-daemon[883]: Activating service name='org.a11y.atspi.Registry' requested by ':1.0' (uid=110 pid=842 comm=\"/usr/sbin/lightdm-gtk-greeter\")": {
            "priority": "6",
            "count": 1,
            "description": "No specific description available. Review the log entry's context and investigate related system or application settings. Consult system documentation or support for detailed information."
        },
        "[session uid=1000 pid=952] Activating service name='org.xfce.Xfconf' requested by ':1.16' (uid=1000 pid=978 comm=\"xfce4-session\")": {
            "priority": "6",
            "count": 1,
            "description": "No specific description available. Review the log entry's context and investigate related system or application settings. Consult system documentation or support for detailed information."
        },
        "dbus-daemon[1079]: Activating service name='org.a11y.atspi.Registry' requested by ':1.0' (uid=1000 pid=978 comm=\"xfce4-session\")": {
            "priority": "6",
            "count": 1,
            "description": "No specific description available. Review the log entry's context and investigate related system or application settings. Consult system documentation or support for detailed information."
        },
        "dbus-daemon[830]: Activating service name='org.a11y.atspi.Registry' requested by ':1.0' (uid=110 pid=788 comm=\"/usr/sbin/lightdm-gtk-greeter\")": {
            "priority": "6",
            "count": 1,
            "description": "No specific description available. Review the log entry's context and investigate related system or application settings. Consult system documentation or support for detailed information."
        },
        "[session uid=1000 pid=899] Activating service name='org.xfce.Xfconf' requested by ':1.16' (uid=1000 pid=921 comm=\"xfce4-session\")": {
            "priority": "6",
            "count": 1,
            "description": "No specific description available. Review the log entry's context and investigate related system or application settings. Consult system documentation or support for detailed information."
        },
        "dbus-daemon[1025]: Activating service name='org.a11y.atspi.Registry' requested by ':1.0' (uid=1000 pid=921 comm=\"xfce4-session\")": {
            "priority": "6",
            "count": 1,
            "description": "No specific description available. Review the log entry's context and investigate related system or application settings. Consult system documentation or support for detailed information."
        },
        "[session uid=1000 pid=899] Activating service name='org.xfce.Xfconf' requested by ':1.23' (uid=1000 pid=1096 comm=\"xfce4-panel\")": {
            "priority": "6",
            "count": 2,
            "description": "No specific description available. Review the log entry's context and investigate related system or application settings. Consult system documentation or support for detailed information."
        }
    }
}
