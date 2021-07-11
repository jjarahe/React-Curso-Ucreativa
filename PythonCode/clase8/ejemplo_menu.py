#!/usr/bin/env python3
#python3 -m pip install simple-term-menu
#pip install simple-term-menu
from simple_term_menu import TerminalMenu
import os
if os.name == "nt":
    import msvcrt
else:
    import tty
    import termios


def main():
    terminal_menu = TerminalMenu(["entry 1", "entry 2", "entry 3"])
    menu_entry_index = terminal_menu.show()
    print(menu_entry_index)


if __name__ == "__main__":
    main()
