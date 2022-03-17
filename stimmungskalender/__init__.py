def tupled_list(input):
    """Transforms a value from the .env file to a list of tuples.
    For example:
    ADMINS="foo:foo@example1.com,bar:bar@example2.com"
    becomes [('foo', 'foo@example1.com'), ('bar', 'bar@example2.com')]
    """
    ret = []
    try:
        for line in input:
            admin = str(line).split(":")
            ret.append((admin[0], admin[1]))
    except AttributeError:
        pass
    return ret
