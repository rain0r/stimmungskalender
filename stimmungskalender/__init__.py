__version__ = "1.3.0-SNAPSHOT"
VERSION = __version__


def listed_tuples(config_val):
    """Transforms a value from the .env file to a list of tuples.
    For example:
    ADMINS="foo:foo@example1.com,bar:bar@example2.com"
    becomes [('foo', 'foo@example1.com'), ('bar', 'bar@example2.com')]
    """
    ret = []
    try:
        for line in config_val:
            admin = str(line).split(":")
            ret.append((admin[0], admin[1]))
    except AttributeError:
        pass
    return ret
